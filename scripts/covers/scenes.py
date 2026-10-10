"""Cenas das capas das notícias (ilustração própria em vista de cima, "flat lay").

Padrão para uma cena nova:
- 3 a 6 objetos que contam o assunto (documento, calendário, celular, maquininha...),
  sobre um fundo de cor sólida diferente das cenas vizinhas;
- números visíveis na cena precisam bater com os da notícia (nada inventado);
- nada de logotipo, marca ou brasão oficial; texto só em objetos (documento, tela);
- `detail=(x, y, largura)` recorta um close para usar no meio do texto.
Gere com: python3 scripts/covers/make.py <cena> <slug>
"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from props import *  # noqa

SCENES = {}


def scene(name, bg, detail=None):
    def deco(fn):
        SCENES[name] = (bg, fn(), detail)
        return fn
    return deco


def glasses(s=1):
    return (f'<g transform="scale({s})"><circle cx="-80" r="62" fill="#bfe3ff" opacity=".25" stroke="#3b2a20" stroke-width="12"/>'
            f'<circle cx="80" r="62" fill="#bfe3ff" opacity=".25" stroke="#3b2a20" stroke-width="12"/>'
            f'<path d="M-20 -6 Q0 -22 20 -6" stroke="#3b2a20" stroke-width="10" fill="none"/>'
            f'<path d="M-140 -10 L-200 -150 M140 -10 L200 -150" stroke="#3b2a20" stroke-width="10" stroke-linecap="round"/></g>')


def calendar_month(title, first_wd, days, marks=(), w=520, h=520, accent='#1e7d55', mark_color='#1e7d55'):
    b = f'<rect width="{w}" height="{h}" rx="16" fill="#fff"/>'
    b += f'<rect width="{w}" height="96" rx="16" fill="{accent}"/><rect y="70" width="{w}" height="26" fill="{accent}"/>'
    for i in range(5):
        b += f'<circle cx="{70 + i * 95}" cy="-4" r="11" fill="#d0d4d2"/><rect x="{64 + i * 95}" y="-26" width="12" height="40" rx="6" fill="#8a918e"/>'
    b += f'<text x="{w / 2}" y="62" font-size="34" font-weight="800" text-anchor="middle" fill="#fff" letter-spacing="2">{title}</text>'
    cw = (w - 40) / 7
    for i, d in enumerate('DSTQQSS'):
        b += f'<text x="{20 + cw * i + cw / 2:.0f}" y="132" font-size="18" font-weight="700" text-anchor="middle" fill="#9aa39f">{d}</text>'
    for day in range(1, days + 1):
        idx = first_wd + day - 1
        col, row = idx % 7, idx // 7
        cx, cy = 20 + cw * col + cw / 2, 178 + row * 62
        if day in marks:
            b += f'<circle cx="{cx:.0f}" cy="{cy - 8:.0f}" r="25" fill="{mark_color}"/>'
            fill, wt = '#fff', 800
        else:
            fill, wt = '#46504c', 600
        b += f'<text x="{cx:.0f}" y="{cy:.0f}" font-size="22" font-weight="{wt}" text-anchor="middle" fill="{fill}">{day}</text>'
    return b


@scene('malha-fina', '#22546a', (590, 100, 560))
def _():
    hl = ('<rect x="40" y="355" width="300" height="26" rx="4" fill="#ffe66d" opacity=".9"/>'
          '<rect x="46" y="364" width="250" height="9" rx="4.5" fill="#9aa19d"/>'
          '<ellipse cx="190" cy="368" rx="178" ry="34" fill="none" stroke="#e03131" stroke-width="5" transform="rotate(-2 190 368)"/>')
    sh = sheet(440, 580, 'DECLARAÇÃO IRPF 2026', '#1d4e89', seed=3, extra=hl + lines(40, 420, 360, 5, seed=9))
    lens = ('<rect x="-200" y="-200" width="400" height="400" fill="#fff"/>'
            + '<g transform="scale(1.35) translate(-190 -368)">' + lines(40, 300, 360, 2, seed=11) + hl + lines(40, 420, 360, 2, seed=12) + '</g>')
    return (
        g(70, 120, 9, 1, envelope(430, 270, '#f6f1e6', '#e6dcc6'))
        + g(150, 470, -13, 1, envelope(450, 280, '#fbf8f1', '#e9e1cf'))
        + g(600, 110, -5, 1, sh + '<g transform="translate(300 160)">' + stamp('PENDÊNCIA', 260) + '</g>')
        + g(1250, 90, 14, 1, calculator())
        + g(1120, 660, -24, 1, pen(330, '#c0392b'), 'shs')
        + g(905, 560, 0, 1, magnifier(125, lens))
        + g(1540, 760, 0, 1, cup(), 'sh')
    )


@scene('vale-refeicao-maquininha', '#e9a23b', (820, 90, 760))
def _():
    terminal = ('<rect width="300" height="520" rx="46" fill="#2b2f36"/>'
                '<rect x="26" y="34" width="248" height="170" rx="16" fill="#e8f6ee"/>'
                '<circle cx="150" cy="96" r="34" fill="#20bf6b"/><path d="M133 96 l12 12 l22 -24" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
                '<text x="150" y="168" font-size="24" font-weight="800" text-anchor="middle" fill="#1e7d55" letter-spacing="1">APROVADO</text>')
    for r in range(4):
        for c in range(3):
            terminal += f'<rect x="{38 + c * 78}" y="{232 + r * 62}" width="66" height="48" rx="12" fill="{"#4a505a" if r < 3 else ("#e74c3c" if c == 0 else "#f1c40f" if c == 1 else "#2ecc71")}"/>'
    receipt = ('<rect width="200" height="300" fill="#fffdf7"/>' + lines(22, 30, 156, 8, gap=26, h=8, color='#d5d2c8', seed=4)
               + ''.join(f'<path d="M{x} 300 l10 12 l10 -12" fill="#fffdf7"/>' for x in range(0, 200, 20)))
    fork = ('<g transform="translate(250 112)" fill="#fff" opacity=".9"><rect x="-4" y="-28" width="8" height="64" rx="4"/>'
            '<rect x="-14" y="-30" width="5" height="26" rx="2.5"/><rect x="9" y="-30" width="5" height="26" rx="2.5"/>'
            '<rect x="26" y="-30" width="12" height="66" rx="6"/></g>')
    meal = card(340, 214, '#ff6b4a', '#d9480f', 'REFEIÇÃO', fork)
    waves = ''.join(f'<path d="M0 {-r} A{r} {r} 0 0 1 {r * 0.87} {-r / 2}" stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round" opacity="{1 - r / 200:.2f}"/>' for r in (50, 85, 120))
    plate = ('<circle r="230" fill="#f7f7f5"/><circle r="230" fill="none" stroke="#e5e4df" stroke-width="4"/><circle r="175" fill="#fff"/>'
             '<ellipse cx="-55" cy="-50" rx="95" ry="80" fill="#fbfaf3"/>'
             + ''.join(f'<ellipse cx="{-55 + dx}" cy="{-50 + dy}" rx="9" ry="5" fill="#efe9d6" transform="rotate({dx * 3} {-55 + dx} {-50 + dy})"/>' for dx, dy in [(-40, -20), (10, -40), (30, 10), (-20, 30), (50, -10), (-60, 10), (0, 0), (20, 45)])
             + '<ellipse cx="70" cy="-55" rx="80" ry="70" fill="#5a2d18"/>'
             + ''.join(f'<ellipse cx="{70 + dx}" cy="{-55 + dy}" rx="12" ry="8" fill="#7a3d22"/>' for dx, dy in [(-30, -20), (20, -30), (30, 20), (-20, 25), (0, 0)])
             + '<path d="M-110 60 q60 -40 120 -10 q40 20 70 70 q-60 60 -130 50 q-60 -10 -60 -110z" fill="#8c4a2f"/><path d="M-90 80 q60 -20 120 20" stroke="#6e3620" stroke-width="6" fill="none"/>'
             + ''.join(f'<ellipse cx="{95 + dx}" cy="{80 + dy}" rx="30" ry="18" fill="{c}" transform="rotate({dx * 2} {95 + dx} {80 + dy})"/>' for dx, dy, c in [(-10, -10, '#4caf50'), (20, 10, '#66bb6a'), (0, 30, '#e53935'), (30, -20, '#e53935'), (-20, 20, '#81c784')]))
    cutlery = '<rect width="18" height="300" rx="9" fill="#cfd6db"/><rect x="40" width="22" height="300" rx="11" fill="#cfd6db"/>'
    return (
        g(260, 420, 0, 1, plate)
        + g(530, 150, 8, 1, cutlery, 'shs')
        + g(860, 120, -8, 1, '<g transform="translate(50 470)">' + receipt + '</g>' + terminal)
        + g(1170, 470, -22, 1, meal)
        + g(1240, 300, -40, 1, waves, None)
        + g(1430, 120, 0, 1, coin(52), 'shs') + g(1500, 200, 0, 1, coin(44), 'shs')
    )


@scene('inss-calendario', '#2f6d55', (60, 170, 900))
def _():
    oct_ = calendar_month('OUTUBRO 2026', 4, 31, marks=range(26, 32), accent='#1f5f46', mark_color='#e67e22')
    nov = calendar_month('NOVEMBRO 2026', 0, 30, marks=(3, 4, 5, 6, 9), accent='#3d7d63', mark_color='#e67e22')
    notif = ('<rect width="250" height="500" fill="#eef4f1"/><rect x="0" y="0" width="250" height="140" fill="#1f5f46"/>'
             '<text x="125" y="98" font-size="44" font-weight="800" text-anchor="middle" fill="#fff">9:41</text>'
             '<rect x="22" y="170" width="206" height="120" rx="18" fill="#fff"/>'
             '<circle cx="54" cy="206" r="18" fill="#20bf6b"/><path d="M45 206 l6 6 l12 -12" stroke="#fff" stroke-width="4" fill="none"/>'
             '<text x="82" y="204" font-size="15" font-weight="800" fill="#24302b">Benefício</text><text x="82" y="222" font-size="15" font-weight="800" fill="#24302b">creditado</text>'
             '<text x="40" y="268" font-size="26" font-weight="800" fill="#1e7d55">R$ 1.621,00</text>'
             + lines(30, 320, 190, 4, gap=26, h=10, color='#d3ddd8', seed=5))
    coins = ''.join(g(0, -i * 10, 0, 1, coin(58), None) for i in range(6))
    return (
        g(980, 70, 9, 1, nov)
        + g(380, 150, -6, 1, oct_)
        + g(110, 260, -14, 1, phone(250, 500, notif))
        + g(1060, 680, -8, 1, glasses(1))
        + g(1420, 330, 0, 1, coins, 'sh')
        + g(1470, 470, 0, 1, coin(50), 'shs')
        + g(-40, 800, 0, 1, plant(170), 'sh')
    )


def scissors():
    return ('<g><ellipse cx="-70" cy="40" rx="42" ry="30" fill="none" stroke="#e63946" stroke-width="16"/>'
            '<ellipse cx="-70" cy="-40" rx="42" ry="30" fill="none" stroke="#e63946" stroke-width="16"/>'
            '<path d="M-30 30 L190 -18 L196 -4 Z" fill="#cfd6db"/><path d="M-30 -30 L190 18 L196 4 Z" fill="#b8c2c8"/>'
            '<circle cx="0" cy="0" r="9" fill="#555"/></g>')


def payslip(rows, hl=None, header='HOLERITE', accent='#1d4e89', w=440, h=560, total=None):
    body = label_rows(rows, w=w - 80, hl=hl)
    if total:
        y = 130 + len(rows) * 40 + 30
        body += f'<rect x="30" y="{y - 34}" width="{w - 60}" height="56" rx="8" fill="{accent}"/>'
        body += f'<text x="46" y="{y + 2}" font-size="19" font-weight="700" fill="#fff">{total[0]}</text>'
        body += f'<text x="{w - 46}" y="{y + 2}" font-size="22" font-weight="900" text-anchor="end" fill="#fff">{total[1]}</text>'
    return doc(w, h, header, accent, body)


def phone_screen(title, big, sub='', color='#1e7d55', check=True):
    s = f'<rect width="250" height="500" fill="#f2f5f4"/><rect width="250" height="150" fill="{color}"/>'
    s += f'<text x="125" y="96" font-size="20" font-weight="700" text-anchor="middle" fill="#fff" opacity=".9">{title}</text>'
    s += '<rect x="22" y="170" width="206" height="150" rx="18" fill="#fff"/>'
    if check:
        s += f'<circle cx="125" cy="212" r="22" fill="#20bf6b"/><path d="M114 212 l8 8 l15 -15" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>'
    s += f'<text x="125" y="272" font-size="27" font-weight="900" text-anchor="middle" fill="#24302b">{big}</text>'
    if sub:
        s += f'<text x="125" y="300" font-size="14" font-weight="600" text-anchor="middle" fill="#6b7570">{sub}</text>'
    s += lines(30, 350, 190, 4, gap=26, h=10, color='#d3ddd8', seed=len(big))
    return s


def terminal(screen_text='APROVADO', color='#2b2f36'):
    t = (f'<rect width="300" height="520" rx="46" fill="{color}"/>'
         '<rect x="26" y="34" width="248" height="170" rx="16" fill="#e8f6ee"/>'
         '<circle cx="150" cy="96" r="34" fill="#20bf6b"/><path d="M133 96 l12 12 l22 -24" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
         f'<text x="150" y="168" font-size="24" font-weight="800" text-anchor="middle" fill="#1e7d55" letter-spacing="1">{screen_text}</text>')
    for r in range(4):
        for c in range(3):
            t += f'<rect x="{38 + c * 78}" y="{232 + r * 62}" width="66" height="48" rx="12" fill="{"#4a505a" if r < 3 else ("#e74c3c" if c == 0 else "#f1c40f" if c == 1 else "#2ecc71")}"/>'
    return t


def waves(color='#fff'):
    return ''.join(f'<path d="M0 {-r} A{r} {r} 0 0 1 {r * 0.87} {-r / 2}" stroke="{color}" stroke-width="9" fill="none" stroke-linecap="round" opacity="{1 - r / 200:.2f}"/>' for r in (50, 85, 120))


def coins_stack(n=6, r=58):
    return ''.join(g(0, -i * 10, 0, 1, coin(r), None) for i in range(n))


def urna():
    u = '<rect width="560" height="380" rx="24" fill="#d9d4c7"/><rect x="24" y="24" width="300" height="230" rx="10" fill="#1d2b36"/>'
    u += '<rect x="44" y="44" width="260" height="190" rx="6" fill="#e8f1f5"/>'
    u += lines(64, 70, 220, 3, gap=26, h=10, color='#b8c7cf', seed=3)
    u += '<rect x="64" y="160" width="90" height="56" rx="6" fill="#c9d6dc"/><rect x="170" y="160" width="114" height="56" rx="6" fill="#c9d6dc"/>'
    u += '<rect x="350" y="24" width="186" height="330" rx="12" fill="#2d3436"/>'
    for r in range(4):
        for c in range(3):
            u += f'<rect x="{366 + c * 56}" y="{40 + r * 58}" width="44" height="44" rx="8" fill="#111"/><text x="{388 + c * 56}" y="{70 + r * 58}" font-size="20" font-weight="700" text-anchor="middle" fill="#fff">{(r * 3 + c + 1) if r < 3 else ("" if c != 1 else "0")}</text>'
    u += '<rect x="366" y="280" width="50" height="50" rx="8" fill="#fff"/><rect x="424" y="280" width="50" height="50" rx="8" fill="#e67e22"/><rect x="482" y="280" width="44" height="50" rx="8" fill="#27ae60"/>'
    u += '<rect x="24" y="280" width="300" height="74" rx="10" fill="#c4beaf"/>'
    return u


def voter_card():
    return ('<rect width="340" height="220" rx="14" fill="#f6f1df"/><rect width="340" height="56" rx="14" fill="#3a7d44"/><rect y="40" width="340" height="16" fill="#3a7d44"/>'
            '<text x="24" y="38" font-size="20" font-weight="900" fill="#fff" letter-spacing="2">TÍTULO DE ELEITOR</text>'
            + lines(24, 84, 290, 4, gap=28, h=10, color='#cfc7ad', seed=8))


def sunglasses():
    return ('<path d="M-150 -20 q0 70 60 70 q60 0 60 -70z" fill="#1d1d1d"/><path d="M30 -20 q0 70 60 70 q60 0 60 -70z" fill="#1d1d1d"/>'
            '<path d="M-150 -22 H150" stroke="#e76f51" stroke-width="10"/><path d="M-30 -20 Q0 -36 30 -20" stroke="#e76f51" stroke-width="8" fill="none"/>'
            '<ellipse cx="-110" cy="0" rx="16" ry="9" fill="#fff" opacity=".35"/><ellipse cx="70" cy="0" rx="16" ry="9" fill="#fff" opacity=".35"/>')


def flipflop(color='#2a9d8f'):
    return (f'<ellipse rx="70" ry="160" fill="{color}"/><ellipse rx="56" ry="146" fill="#fff" opacity=".25"/>'
            '<path d="M0 -100 L-58 10 M0 -100 L58 10" stroke="#264653" stroke-width="12" stroke-linecap="round"/><circle cy="-100" r="10" fill="#264653"/>')


def towel():
    stripes = ''.join(f'<rect x="{i * 80}" width="40" height="420" fill="#fff" opacity=".85"/>' for i in range(8))
    return f'<rect width="640" height="420" fill="#e76f51"/>{stripes}'


def sunscreen():
    return ('<rect width="110" height="280" rx="26" fill="#ffd166"/><rect x="25" y="-40" width="60" height="50" rx="10" fill="#ef476f"/>'
            '<circle cx="55" cy="130" r="32" fill="#ef476f" opacity=".9"/><text x="55" y="140" font-size="22" font-weight="900" text-anchor="middle" fill="#fff">50</text>')


def piggy(color='#f7a6b9'):
    return (f'<ellipse rx="220" ry="160" fill="{color}"/><circle cx="190" cy="-30" r="70" fill="{color}"/>'
            f'<ellipse cx="240" cy="-20" rx="38" ry="30" fill="#f08aa3"/><circle cx="230" cy="-26" r="6" fill="#a8435a"/><circle cx="250" cy="-14" r="6" fill="#a8435a"/>'
            f'<circle cx="180" cy="-60" r="9" fill="#3b2a2a"/><path d="M140 -110 l20 -50 l30 40z" fill="#f08aa3"/>'
            f'<rect x="-60" y="-160" width="110" height="16" rx="8" fill="#a8435a"/>'
            f'<rect x="-150" y="120" width="44" height="70" rx="14" fill="{color}"/><rect x="100" y="120" width="44" height="70" rx="14" fill="{color}"/>'
            f'<path d="M-220 -10 q-50 -10 -40 -50" stroke="{color}" stroke-width="14" fill="none" stroke-linecap="round"/>'
            f'<ellipse cx="-60" cy="-70" rx="70" ry="26" fill="#fff" opacity=".25"/>')


def folder(w=480, h=340, color='#f4a261', label=''):
    return (f'<path d="M0 30 Q0 0 30 0 H170 L200 30 H{w - 20} Q{w} 30 {w} 50 V{h - 20} Q{w} {h} {w - 20} {h} H20 Q0 {h} 0 {h - 20} Z" fill="{color}"/>'
            f'<rect x="30" y="80" width="{w - 60}" height="{h - 110}" rx="6" fill="#fff" opacity=".18"/>'
            + (f'<text x="40" y="{h - 50}" font-size="34" font-weight="900" fill="#fff" letter-spacing="2">{label}</text>' if label else ''))


def notepad_pct(text, sub, color='#e63946'):
    return (f'<rect width="300" height="300" rx="10" fill="#fff59d"/><rect width="300" height="40" rx="10" fill="#fbc02d" opacity=".6"/>'
            f'<text x="150" y="170" font-size="76" font-weight="900" text-anchor="middle" fill="{color}">{text}</text>'
            f'<text x="150" y="230" font-size="22" font-weight="700" text-anchor="middle" fill="#5d4037">{sub}</text>')


@scene('pgfn-regularizacao', '#5b3f8c', (330, 150, 760))
def _():
    b1 = boleto(540, 240, 'DÍVIDA ATIVA', '#5b3f8c', 'R$ 4.820,00')
    b1 += '<path d="M250 90 H520" stroke="#e03131" stroke-width="5"/><text x="510" y="140" font-size="26" font-weight="900" text-anchor="end" fill="#2b8a3e">R$ 3.620,00</text>'
    return (
        g(120, 110, -10, 1, boleto(520, 230, 'JUROS E MULTA', '#2d3436', 'R$ 1.200,00'))
        + g(420, 330, 6, 1, b1)
        + g(820, 260, -26, 1.3, scissors(), 'shs')
        + g(1110, 90, 10, 1, notepad_pct('-100%', 'juros e multas'))
        + g(1180, 470, -8, 1, calculator(240, 340))
        + g(80, 620, 0, 1, coins_stack(4), 'sh')
    )


@scene('pix-aproximacao', '#0f6e6e', (380, 60, 860))
def _():
    return (
        g(230, 160, -6, 1, terminal('PAGO'))
        + g(640, 170, 14, 1.05, phone(250, 500, phone_screen('Pagamento', 'R$ 1.000,00', 'por aproximação', '#0f6e6e')))
        + g(600, 330, -30, 1.1, waves(), None)
        + g(1080, 110, 12, 1, card(340, 214, '#2b2f36', '#111317', 'DÉBITO'))
        + g(1130, 450, -6, 1, '<rect width="300" height="210" rx="16" fill="#fff"/>' + label_rows([('Limite anterior', 'R$ 500'), ('Novo limite', 'Livre')], 30, 70, 240, 60, 20, hl=(1, '#c3fae8')))
    )


@scene('focus-inflacao-selic', '#7a2e2e', (90, 90, 820))
def _():
    rep = doc(520, 600, 'BOLETIM FOCUS', '#7a2e2e',
              label_rows([('IPCA 2026', '5,01%'), ('Selic fim de ano', '13,5%'), ('PIB 2026', '2,0%'), ('Dólar', 'R$ 5,20')], 46, 140, 428, 52, 20, hl=(0, '#ffe3e3'))
              + '<g transform="translate(30 370)">' + chart_paper(460, 200, (0.2, 0.35, 0.3, 0.55, 0.6, 0.8), '#e03131') + '</g>')
    basket = ('<ellipse rx="210" ry="150" fill="#c8995f"/><ellipse rx="180" ry="122" fill="#a9763f"/>'
              '<circle cx="-70" cy="-30" r="58" fill="#e63946"/><circle cx="40" cy="-50" r="52" fill="#f4a261"/>'
              '<ellipse cx="-10" cy="50" rx="90" ry="40" fill="#ffe066"/><rect x="60" y="0" width="70" height="110" rx="14" fill="#f8f9fa" transform="rotate(20)"/>'
              '<path d="M-200 -20 Q0 -260 200 -20" fill="none" stroke="#8a6234" stroke-width="18"/>')
    return (
        g(160, 110, -5, 1, rep)
        + g(1010, 470, 0, 1, basket)
        + g(1150, 110, 12, 1, tag('5,01%', 220, '#e03131'), 'shs')
        + g(830, 200, -14, 1, pen(300, '#2d3436'), 'shs')
    )


@scene('fgts-pgfn-empregadores', '#24527a', (200, 100, 800))
def _():
    return (
        g(120, 170, -12, 1, booklet())
        + g(430, 120, 4, 1, folder(500, 360, '#f4a261', ''))
        + g(470, 175, 4, 1, '<text font-size="30" font-weight="900" fill="#fff" letter-spacing="3">FGTS</text>', None)
        + g(520, 200, 4, 1, doc(400, 300, 'ACORDO PGFN', '#24527a', label_rows([('Débito', 'R$ 38.400'), ('Desconto', 'até 65%'), ('Adesão', '15/10 a 29/1')], 46, 140, 308, 46, 18, hl=(1, '#d3f9d8'))))
        + g(1080, 110, 10, 1, calendar_month('OUTUBRO', 4, 31, marks=(15,), w=420, h=470, accent='#24527a', mark_color='#e67e22'))
        + g(1230, 640, 0, 1, stamp('NEGOCIADO', 300, '#2b8a3e', -8), None)
    )


@scene('prova-de-vida-voto', '#1f6f5c', (160, 160, 760))
def _():
    return (
        g(200, 220, -4, 1, urna())
        + g(820, 120, 10, 1, voter_card())
        + g(1120, 190, -8, 1, phone(250, 500, phone_screen('Meu INSS', 'Prova de vida', 'feita pelo voto', '#1f6f5c')))
        + g(720, 640, -6, 0.9, glasses(1))
        + g(1480, 640, 0, 1, plant(160), 'sh')
    )


@scene('quinto-dia-util', '#2c5d8f', (60, 80, 1150))
def _():
    env = ('<rect width="420" height="260" rx="10" fill="#f4efe4"/><path d="M0 10 L210 140 L420 10" fill="none" stroke="#e6dcc6" stroke-width="6"/>'
           + g(60, -60, -6, 1, banknote(), None) + g(90, -30, 4, 1, banknote(330, 160, '#7fb6e0', '#4b86b4'), None))
    return (
        g(120, 120, -6, 1, calendar_month('OUTUBRO 2026', 4, 31, marks=(6,), accent='#2c5d8f', mark_color='#e03131'))
        + g(700, 140, 6, 1, payslip([('Salário', 'R$ 3.000,00'), ('INSS', '− R$ 248,60'), ('IRRF', 'R$ 0,00')], header='HOLERITE SETEMBRO', accent='#2c5d8f', w=440, h=420, total=('Líquido', 'R$ 2.751,40')))
        + g(1130, 430, -10, 1, env)
        + g(1250, 120, 0, 1, clock(110, 9, 0, ring='#2c5d8f'))
    )


@scene('saque-aniversario-fgts', '#b5476b', (260, 120, 760))
def _():
    return (
        g(470, 430, 0, 1, cake(200, 1))
        + g(860, 150, 12, 1, phone(250, 500, phone_screen('App FGTS', 'R$ 1.350,00', 'saldo de R$ 4 mil', '#b5476b')))
        + g(170, 170, -10, 1, booklet(240, 330))
        + g(1240, 230, 0, 1, coins_stack(5), 'sh') + g(1360, 400, 0, 1, coin(50), 'shs')
        + g(1180, 560, -14, 1, gift(200, '#ffd166', '#5e60ce'))
    )


@scene('salario-minimo-2027', '#1e5f74', (120, 120, 800))
def _():
    notes = ''.join(g(i * 18, -i * 22, -4 + i * 3, 1, banknote(), 'shs') for i in range(4))
    return (
        g(160, 160, -6, 1, doc(500, 560, 'ORÇAMENTO 2027', '#1e5f74', label_rows([('Salário mínimo', 'R$ 1.741'), ('Hoje', 'R$ 1.621'), ('Aumento', '+ R$ 120')], 46, 150, 408, 54, 20, hl=(0, '#fff3bf')) + '<g transform="translate(30 340)">' + chart_paper(440, 190, bars=((0.55, '#a5d8ff'), (0.7, '#74c0fc'), (0.95, '#1c7ed6'))) + '</g>'))
        + g(780, 380, 0, 1, notes, None)
        + g(1250, 130, 14, 1, calculator(240, 340))
        + g(1380, 640, 0, 1, coins_stack(4), 'sh')
    )


@scene('seguro-desemprego', '#3d5a80', (640, 90, 640))
def _():
    stuff = (g(60, 60, 0, 1, plant(110), None) + g(250, 60, 0, 0.7, cup(90), None)
             + '<g transform="translate(330 150) rotate(12)"><rect width="150" height="120" rx="6" fill="#3d3d3d"/><rect x="12" y="12" width="126" height="96" fill="#9fd3ff"/></g>')
    return (
        g(120, 300, -4, 1, box(460, 340) + stuff)
        + g(680, 110, 5, 1, doc(440, 560, 'SEGURO-DESEMPREGO', '#3d5a80', label_rows([('Parcela mínima', 'R$ 1.621,00'), ('Parcela máxima', 'R$ 2.518,65'), ('Parcelas', '3 a 5')], 46, 150, 348, 54, 19, hl=(1, '#e7f5ff')) + lines(46, 340, 348, 6, seed=21)))
        + g(1170, 150, 12, 1, booklet())
        + g(1210, 560, -10, 1, pen(300, '#3d5a80'), 'shs')
    )


@scene('ir-zero-5-mil', '#2b8a3e', (500, 80, 760))
def _():
    ps = payslip([('Salário bruto', 'R$ 5.000,00'), ('INSS', '− R$ 501,51'), ('IRRF', 'R$ 0,00')], hl=(2, '#d3f9d8'), header='CONTRACHEQUE', accent='#2b8a3e', w=460, h=560, total=('Líquido', 'R$ 4.498,49'))
    return (
        g(620, 100, -4, 1, ps + '<g transform="translate(320 440)">' + stamp('ISENTO', 200, '#2b8a3e', -12) + '</g>')
        + g(170, 220, 8, 1, calculator(260, 360))
        + g(1180, 150, 10, 1, phone(250, 500, phone_screen('Imposto de Renda', 'R$ 0,00', 'até R$ 5 mil', '#2b8a3e')))
        + g(330, 680, -20, 1, pen(320, '#2d3436'), 'shs')
    )


@scene('inss-teto-faixas', '#264653', (650, 180, 820))
def _():
    steps = ''
    for i, (pct, c) in enumerate([('7,5%', '#e9c46a'), ('9%', '#f4a261'), ('12%', '#e76f51'), ('14%', '#d62828')]):
        h = 110 + i * 80
        steps += f'<rect x="{i * 150}" y="{-h}" width="130" height="{h}" rx="12" fill="{c}"/><text x="{i * 150 + 65}" y="{-h + 50}" font-size="34" font-weight="900" text-anchor="middle" fill="#fff">{pct}</text>'
    return (
        g(120, 140, -6, 1, payslip([('Salário', 'R$ 9.000,00'), ('INSS (teto)', '− R$ 988,09'), ('Teto 2026', 'R$ 8.475,55')], hl=(1, '#fff3bf'), header='HOLERITE', accent='#264653', w=440, h=440))
        + g(720, 700, 0, 1, steps)
        + g(1360, 130, 12, 1, calculator(220, 320))
        + g(1350, 560, 0, 1, coins_stack(3, 50), 'sh')
    )


@scene('horas-extras', '#3a3a6e', (90, 100, 820))
def _():
    ponto = doc(400, 560, 'CARTÃO DE PONTO', '#3a3a6e', ''.join(
        f'<text x="46" y="{150 + i * 46}" font-size="18" font-weight="600" fill="#46504c">{d}</text><text x="190" y="{150 + i * 46}" font-size="18" font-weight="700" fill="#46504c">08:00</text><text x="354" y="{150 + i * 46}" font-size="18" font-weight="800" text-anchor="end" fill="{"#e03131" if late else "#46504c"}">{end}</text>'
        for i, (d, end, late) in enumerate([('Seg', '17:00', 0), ('Ter', '19:30', 1), ('Qua', '17:00', 0), ('Qui', '20:00', 1), ('Sex', '17:00', 0), ('Dom', '14:00', 1)])))
    return (
        g(180, 120, -5, 1, ponto)
        + g(830, 400, 8, 1, clock(170, 8, 15, ring='#e63946'))
        + g(1200, 120, 10, 1, notepad_pct('+50%', 'hora extra', '#3a3a6e'))
        + g(1220, 500, -8, 1, notepad_pct('+100%', 'domingo', '#e03131'))
    )


@scene('ferias', '#3fa7c4', (380, 60, 1000))
def _():
    return (
        g(100, 140, -6, 1, towel())
        + g(470, 330, 10, 1, sunglasses())
        + g(860, 470, -18, 1, flipflop('#ff7b54'), 'shs') + g(1010, 450, 12, 1, flipflop('#ff7b54'), 'shs')
        + g(1210, 120, 10, 1, calendar_month('JANEIRO 2027', 5, 31, marks=range(5, 15), w=400, h=460, accent='#1f7a8c', mark_color='#ff7b54'))
        + g(700, 90, -20, 1, sunscreen())
    )


@scene('rescisao-sem-justa-causa', '#6d4c41', (640, 70, 660))
def _():
    stuff = (g(70, 60, 0, 1, plant(110), None) + g(270, 70, 0, 0.7, cup(90), None)
             + '<g transform="translate(330 150) rotate(12)"><rect width="150" height="120" rx="6" fill="#3d3d3d"/><rect x="12" y="12" width="126" height="96" fill="#ffd8a8"/></g>')
    return (
        g(110, 340, -6, 1, box(470, 340) + stuff)
        + g(700, 90, 5, 1, payslip([('Saldo de salário', 'R$ 1.500,00'), ('Aviso prévio', 'R$ 3.600,00'), ('13º proporcional', 'R$ 1.750,00'), ('Férias + 1/3', 'R$ 2.333,33'), ('Multa 40% FGTS', 'R$ 2.880,00')], header='RESCISÃO', accent='#6d4c41', w=460, h=600, total=('Total', 'R$ 12.063,33')))
        + g(1270, 160, 12, 1, booklet())
        + g(1260, 620, 0, 1, coins_stack(4), 'sh')
    )


@scene('decimo-terceiro', '#a61e4d', (180, 80, 820))
def _():
    return (
        g(230, 120, -5, 1, payslip([('13º salário', 'R$ 4.200,00'), ('1ª parcela', '− R$ 2.100,00'), ('INSS', '− R$ 392,60')], header='13º SALÁRIO', accent='#a61e4d', w=440, h=440, total=('2ª parcela', 'R$ 1.707,40')))
        + g(760, 140, 8, 1, calendar_month('DEZEMBRO', 2, 31, marks=(18,), w=440, h=500, accent='#a61e4d', mark_color='#2b8a3e'))
        + g(1300, 200, -10, 1, gift(240))
        + g(140, 690, 0, 1, ornament(60, '#ffd43b'), 'shs') + g(1330, 620, 0, 1, ornament(56, '#2b8a3e'), 'shs') + g(1480, 520, 0, 1, ornament(44), 'shs')
    )


@scene('reajuste-aluguel', '#8f5e3c', (100, 120, 820))
def _():
    return (
        g(160, 130, -4, 1, doc(470, 580, 'CONTRATO DE LOCAÇÃO', '#8f5e3c', label_rows([('Aluguel atual', 'R$ 2.000,00'), ('IGP-M 12 meses', '3,35%'), ('IPCA 12 meses', '4,22%')], 46, 150, 378, 54, 19, hl=(1, '#fff3bf')) + lines(46, 330, 378, 7, seed=31)))
        + g(880, 470, 0, 1.15, house())
        + g(1260, 170, 0, 1, keys(), 'shs')
        + g(760, 140, -12, 1, tag('+3,35%', 230, '#2b8a3e'), 'shs')
    )


@scene('poupanca-cdb', '#355070', (240, 220, 820))
def _():
    return (
        g(420, 460, 0, 1, piggy())
        + g(850, 260, 0, 1, jar(200, 300, 0.45, 'POUP.', '#e9b949'))
        + g(1110, 200, 0, 1, jar(200, 360, 0.75, 'CDB', '#e9b949'))
        + g(1360, 140, 6, 1, notepad_pct('8,3%', 'ao ano', '#355070'))
        + g(180, 120, -10, 1, coins_stack(4), 'sh')
    )


@scene('mei-das', '#c05621', (130, 120, 700))
def _():
    apron = ('<path d="M60 0 H220 V60 Q280 80 280 160 V420 Q280 450 250 450 H30 Q0 450 0 420 V160 Q0 80 60 60Z" fill="#2f4858"/>'
             '<rect x="70" y="200" width="140" height="90" rx="10" fill="#fff" opacity=".2"/><text x="140" y="256" font-size="40" font-weight="900" text-anchor="middle" fill="#fff">MEI</text>')
    return (
        g(160, 150, -6, 1, boleto(520, 230, 'DAS MEI', '#c05621', 'R$ 81,05'))
        + g(240, 440, 4, 1, doc(440, 300, 'CNPJ', '#2f4858', label_rows([('Faturamento', 'até R$ 81 mil'), ('Vencimento', 'dia 20')], 46, 140, 348, 50, 19)))
        + g(820, 120, 8, 1, apron)
        + g(1150, 260, -8, 0.85, terminal('PAGO'))
        + g(1450, 680, 0, 1, coins_stack(3), 'sh')
    )


@scene('inss-autonomo-planos', '#2a6f97', (240, 170, 900))
def _():
    return (
        g(300, 300, 0, 1, jar(220, 400, 0.9, '20%'))
        + g(620, 380, 0, 1, jar(220, 320, 0.55, '11%'))
        + g(940, 450, 0, 1, jar(220, 250, 0.3, '5%'))
        + g(1240, 140, 10, 1, doc(300, 420, 'GPS / DAS', '#2a6f97', lines(40, 130, 220, 8, seed=41)))
        + g(80, 150, -8, 1, booklet(220, 320, '#33658a', 'AUTÔNOMO', ''))
    )


@scene('sac-price', '#4a5759', (130, 120, 860))
def _():
    sac = chart_paper(420, 300, bars=[(0.95 - i * 0.1, '#e76f51') for i in range(7)], title='SAC')
    price = chart_paper(420, 300, bars=[(0.62, '#2a9d8f') for _ in range(7)], title='PRICE')
    return (
        g(150, 140, -6, 1, sac)
        + g(610, 200, 5, 1, price)
        + g(1250, 380, 0, 1.05, house(1, '#e9edc9', '#bc6c25'))
        + g(470, 640, 0, 1, keys(), 'shs')
        + g(1100, 640, 0, 1, '<rect width="1" height="1"/>', None)
        + g(760, 590, -10, 1, doc(380, 240, 'FINANCIAMENTO', '#4a5759', label_rows([('Valor', 'R$ 200 mil'), ('Prazo', '30 anos')], 46, 140, 288, 46, 18)))
    )


@scene('selic-cai', '#0b525b', (380, 200, 760))
def _():
    return (
        g(640, 440, 0, 0.85, gauge(230, 0.62, '13,75%'))
        + g(90, 90, -8, 0.9, chart_paper(420, 300, (0.95, 0.9, 0.82, 0.7, 0.55), '#2b8a3e', 'SELIC'))
        + g(1000, 120, 10, 1, phone(250, 500, phone_screen('Investimentos', '13,75%', 'Selic ao ano', '#0b525b', False)))
        + g(1330, 380, 0, 1, coins_stack(5), 'sh')
        + g(1290, 650, -12, 1, card(320, 200, '#495057', '#212529', 'CRÉDITO'))
    )


@scene('salario-minimo-1621', '#3c6e47', (680, 90, 640))
def _():
    wallet = ('<rect width="460" height="300" rx="26" fill="#6b4226"/><rect x="0" y="0" width="460" height="120" rx="26" fill="#7c4f2e"/>'
              '<rect x="360" y="40" width="80" height="56" rx="14" fill="#5a361e"/><circle cx="400" cy="68" r="10" fill="#c9a227"/>')
    notes = ''.join(g(40 + i * 30, -60 - i * 10, -6 + i * 4, 1, banknote(300, 150), None) for i in range(3))
    return (
        g(160, 330, -6, 1, notes + wallet)
        + g(720, 110, 5, 1, payslip([('Salário mínimo', 'R$ 1.621,00'), ('Era (2025)', 'R$ 1.518,00'), ('Reajuste', '+ 6,8%')], hl=(0, '#fff3bf'), header='2026', accent='#3c6e47', w=420, h=430))
        + g(1240, 170, 12, 1, calculator(240, 340))
        + g(1180, 650, 0, 1, coins_stack(4), 'sh') + g(1330, 690, 0, 1, coin(48), 'shs')
    )


@scene('abono-pis', '#1864ab', (100, 100, 820))
def _():
    pis = ('<rect width="360" height="226" rx="16" fill="#f1f3f5"/><rect width="360" height="64" rx="16" fill="#1864ab"/><rect y="48" width="360" height="16" fill="#1864ab"/>'
           '<text x="24" y="42" font-size="22" font-weight="900" fill="#fff" letter-spacing="2">PIS / PASEP</text>'
           + lines(24, 96, 300, 3, gap=30, h=11, color='#ced4da', seed=51)
           + '<text x="24" y="206" font-size="20" fill="#495057" font-family="DejaVu Sans Mono,monospace">123.45678.90-1</text>')
    return (
        g(150, 160, -8, 1, booklet())
        + g(470, 230, 6, 1, pis)
        + g(940, 110, 8, 1, calendar_month('DEZEMBRO', 2, 31, marks=(30,), w=440, h=500, accent='#1864ab', mark_color='#e67e22'))
        + g(1430, 520, 0, 1, coins_stack(5), 'sh')
        + g(470, 560, -4, 1, phone(250, 500, phone_screen('Abono salarial', 'R$ 1.621,00', 'valor máximo', '#1864ab')), 'sh')
    )


@scene('afastamento-medida-protetiva', '#6b3f7a', (560, 90, 700))
def _():
    medida = sheet(430, 560, 'MEDIDA PROTETIVA', '#6b3f7a', seed=62, extra='<g transform="translate(215 470)">' + stamp('6 MESES', 240, '#c0392b', -8) + '</g>')
    quem_paga = payslip([('Primeiros 15 dias', 'Empregador'), ('Dias seguintes', 'INSS'), ('Duração máxima', '6 meses')], hl=(2, '#f3e5f5'), header='QUEM PAGA', accent='#6b3f7a', w=450, h=340)
    return (
        g(110, 150, -6, 1, medida)
        + g(640, 120, 4, 1, quem_paga)
        + g(1230, 110, 9, 1, phone(250, 500, phone_screen('Afastamento', '6 meses', 'salário pago', '#6b3f7a')))
        + g(1330, 690, 0, 1, coins_stack(4), 'sh')
        + g(760, 640, -14, 1, pen(330, '#2d3436'))
    )


@scene('ipca-setembro', '#5f7a2e', (110, 90, 700))
def _():
    rep = doc(520, 600, 'IPCA SETEMBRO 2026', '#5f7a2e',
              label_rows([('No mês', '0,82%'), ('Agosto', '-0,32%'), ('No ano', '3,95%'), ('12 meses', '4,58%')], 46, 140, 428, 52, 20, hl=(3, '#fff3bf'))
              + '<g transform="translate(30 370)">' + chart_paper(460, 200, (0.15, 0.1, 0.3, 0.2, 0.45, 0.8), '#e03131') + '</g>')
    return (
        g(160, 110, -5, 1, rep)
        + g(900, 150, 10, 1, tag('+7,98%', 240, '#e8590c'), 'shs')
        + g(1000, 330, -6, 1, calculator(260, 360) + '<rect x="22" y="24" width="216" height="70" rx="10" fill="#c8d6c0"/><text x="224" y="74" font-size="34" font-weight="700" text-anchor="end" fill="#2d3a2a" font-family="DejaVu Sans Mono,monospace">2.091,60</text>')
        + g(780, 560, 4, 1, coins_stack(3), 'sh')
    )
