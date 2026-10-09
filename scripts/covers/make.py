"""Gera a capa e a imagem de detalhe de uma notícia a partir de uma cena de scenes.py.

Uso (na raiz do projeto):
    python3 scripts/covers/make.py <cena> <slug-da-noticia>
    python3 scripts/covers/make.py --list

Saída: public/images/news/<slug>.jpg (capa, 1600x840) e
public/images/news/<slug>-detalhe.jpg (close para o meio do texto, se a cena tiver `detail`).
Precisa de Python com Playwright e Pillow e do Chromium local (PLAYWRIGHT_BROWSERS_PATH).
"""

import asyncio
import glob
import importlib.util
import os
import pathlib
import sys
import tempfile

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent.parent
OUT = ROOT / 'public' / 'images' / 'news'
W, H = 1600, 840


def load_scenes():
    spec = importlib.util.spec_from_file_location('scenes', HERE / 'scenes.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.SCENES


def page(bg, body, vb=f'0 0 {W} {H}'):
    css = (HERE / 'base.css').read_text()
    defs = (HERE / 'defs.svg').read_text()
    return (f'<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body>'
            f'<svg width="{W}" height="{H}" viewBox="{vb}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">{defs}'
            f'<rect width="{W}" height="{H}" fill="{bg}"/>{body}'
            f'<rect width="{W}" height="{H}" fill="url(#light)"/><rect width="{W}" height="{H}" filter="url(#grain)"/></svg></body></html>')


def chromium_path():
    base = os.environ.get('PLAYWRIGHT_BROWSERS_PATH', '/opt/pw-browsers')
    found = sorted(glob.glob(f'{base}/chromium-*/chrome-linux/chrome'))
    return found[-1] if found else None


async def render(pages):
    from PIL import Image
    from playwright.async_api import async_playwright

    async with async_playwright() as p:
        exe = chromium_path()
        browser = await p.chromium.launch(executable_path=exe) if exe else await p.chromium.launch()
        tab = await browser.new_page(viewport={'width': W, 'height': H})
        with tempfile.TemporaryDirectory() as tmp:
            for target, html in pages:
                src = pathlib.Path(tmp) / 'scene.html'
                src.write_text(html, encoding='utf8')
                await tab.goto(src.as_uri())
                await tab.wait_for_timeout(150)
                png = pathlib.Path(tmp) / 'shot.png'
                await tab.screenshot(path=str(png))
                Image.open(png).convert('RGB').save(target, 'JPEG', quality=80, optimize=True, progressive=True)
                print(target.relative_to(ROOT))
        await browser.close()


def main():
    scenes = load_scenes()
    if len(sys.argv) == 2 and sys.argv[1] == '--list':
        print('\n'.join(scenes))
        return
    if len(sys.argv) != 3 or sys.argv[1] not in scenes:
        sys.exit(__doc__)
    name, slug = sys.argv[1], sys.argv[2]
    bg, body, detail = scenes[name]
    pages = [(OUT / f'{slug}.jpg', page(bg, body))]
    if detail:
        x, y, w = detail
        pages.append((OUT / f'{slug}-detalhe.jpg', page(bg, body, f'{x} {y} {w} {w * H / W:.0f}')))
    asyncio.run(render(pages))


if __name__ == '__main__':
    main()
