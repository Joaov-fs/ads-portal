"""Objetos reutilizáveis em vista de cima (flat lay), desenhados em SVG."""
import random


def g(x, y, rot=0, s=1, body='', filt='sh'):
    f = f' filter="url(#{filt})"' if filt else ''
    return f'<g transform="translate({x} {y}) rotate({rot}) scale({s})"{f}>{body}</g>'


def lines(x, y, w, n, gap=22, h=9, color='#c9cfcc', seed=1, last=0.6):
    r = random.Random(seed)
    out = ''
    for i in range(n):
        ww = w * (last if i == n - 1 else r.uniform(0.72, 1))
        out += f'<rect x="{x}" y="{y + i * gap}" width="{ww:.0f}" height="{h}" rx="{h / 2}" fill="{color}"/>'
    return out


def sheet(w=420, h=560, header='', accent='#0d5c63', seed=1, extra=''):
    b = f'<rect width="{w}" height="{h}" rx="10" fill="url(#paper)"/>'
    b += f'<rect x="34" y="34" width="{w - 68}" height="54" rx="6" fill="{accent}" opacity=".12"/>'
    if header:
        b += f'<text x="50" y="69" font-size="19" font-weight="800" letter-spacing="1.5" fill="{accent}">{header}</text>'
    b += lines(40, 120, w - 80, 4, seed=seed)
    b += f'<rect x="40" y="225" width="{w - 80}" height="1.5" fill="#dfe3e1"/>'
    b += lines(40, 250, w - 80, 6, seed=seed + 1)
    b += extra
    return b


def envelope(w=430, h=270, color='#f4efe4', flap='#e8e0cf', window=True):
    b = f'<rect width="{w}" height="{h}" rx="8" fill="{color}"/>'
    b += f'<path d="M0 8 L{w / 2} {h * 0.55} L{w} 8" fill="none" stroke="{flap}" stroke-width="6"/>'
    if window:
        b += f'<rect x="{w * 0.12}" y="{h * 0.56}" width="{w * 0.48}" height="{h * 0.28}" rx="6" fill="#fff" stroke="{flap}" stroke-width="3"/>'
        b += lines(w * 0.12 + 18, h * 0.56 + 20, w * 0.48 - 36, 3, gap=18, h=7, seed=7)
    b += f'<rect x="{w - 92}" y="22" width="62" height="74" rx="4" fill="none" stroke="{flap}" stroke-width="4" stroke-dasharray="7 6"/>'
    return b


def magnifier(r=120, content=''):
    b = '<rect x="-24" y="{0}" width="48" height="210" rx="22" transform="rotate(-38)" fill="#2b2b2b"/>'.format(r - 6)
    b += f'<clipPath id="lens"><circle r="{r}"/></clipPath>'
    b += f'<g clip-path="url(#lens)"><circle r="{r}" fill="#fff"/>{content}</g>'
    b += f'<circle r="{r}" fill="#9fd3ff" opacity=".12"/>'
    b += f'<circle r="{r + 9}" fill="none" stroke="#2f2f2f" stroke-width="20"/>'
    b += f'<path d="M{-r * 0.6} {-r * 0.45} A{r * 0.8} {r * 0.8} 0 0 1 {-r * 0.05} {-r * 0.78}" stroke="#fff" stroke-width="10" stroke-linecap="round" fill="none" opacity=".7"/>'
    return b


def pen(length=360, color='#123c69'):
    return (f'<rect width="{length}" height="26" rx="13" fill="{color}"/>'
            f'<rect x="{length * 0.62}" y="-6" width="{length * 0.3}" height="10" rx="5" fill="#c9a227"/>'
            f'<path d="M{length} 2 L{length + 46} 13 L{length} 24 Z" fill="#e9e3d2"/>'
            f'<path d="M{length + 34} 10 L{length + 46} 13 L{length + 34} 16 Z" fill="#222"/>')


def cup(r=105, coffee='#5b3a24'):
    return (f'<circle r="{r + 34}" fill="#f2efe9"/><circle r="{r + 34}" fill="none" stroke="#e2ddd3" stroke-width="3"/>'
            f'<rect x="{r - 10}" y="-24" width="70" height="48" rx="24" fill="#fafafa"/>'
            f'<circle r="{r}" fill="#fafafa"/><circle r="{r - 16}" fill="{coffee}"/>'
            f'<ellipse cx="-25" cy="-30" rx="30" ry="14" fill="#fff" opacity=".18"/>')


def calculator(w=260, h=360, body_color='#2d3436'):
    b = f'<rect width="{w}" height="{h}" rx="24" fill="{body_color}"/>'
    b += f'<rect x="22" y="24" width="{w - 44}" height="70" rx="10" fill="#c8d6c0"/>'
    b += f'<text x="{w - 36}" y="74" font-size="34" font-weight="700" text-anchor="end" fill="#2d3a2a" font-family="DejaVu Sans Mono,monospace">1.621,00</text>'
    k = (w - 44 - 3 * 12) / 4
    for row in range(5):
        for col in range(4):
            c = '#f39c12' if col == 3 else ('#636e72' if row == 0 else '#4b5558')
            b += f'<rect x="{22 + col * (k + 12):.0f}" y="{116 + row * 48}" width="{k:.0f}" height="38" rx="9" fill="{c}"/>'
    return b


def phone(w=250, h=500, screen=''):
    b = f'<rect width="{w}" height="{h}" rx="38" fill="#1b1d21"/>'
    b += f'<rect x="12" y="12" width="{w - 24}" height="{h - 24}" rx="28" fill="#fff"/>'
    b += f'<clipPath id="scr{w}{h}"><rect x="12" y="12" width="{w - 24}" height="{h - 24}" rx="28"/></clipPath>'
    b += f'<g clip-path="url(#scr{w}{h})">{screen}</g>'
    b += f'<rect x="{w / 2 - 34}" y="22" width="68" height="18" rx="9" fill="#1b1d21"/>'
    return b


def coin(r=46, face='#e9b949', edge='#b8862b', mark='R$'):
    return (f'<circle r="{r}" fill="{edge}"/><circle r="{r - 6}" fill="{face}"/>'
            f'<circle r="{r - 14}" fill="none" stroke="{edge}" stroke-width="3" opacity=".6"/>'
            f'<text y="{r * 0.22}" font-size="{r * 0.62}" font-weight="800" text-anchor="middle" fill="{edge}">{mark}</text>')


def card(w=340, h=214, c1='#ff7a45', c2='#e8590c', label='', icon=''):
    gid = f'cg{c1[1:]}{c2[1:]}'
    b = f'<linearGradient id="{gid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{c1}"/><stop offset="1" stop-color="{c2}"/></linearGradient>'
    b += f'<rect width="{w}" height="{h}" rx="18" fill="url(#{gid})"/>'
    b += f'<circle cx="{w * 0.85}" cy="{h * 0.1}" r="{h * 0.6}" fill="#fff" opacity=".08"/>'
    b += f'<rect x="28" y="70" width="52" height="40" rx="7" fill="#f5d27a"/><path d="M28 90 H80 M54 70 V110" stroke="#c9a14a" stroke-width="2"/>'
    if label:
        b += f'<text x="28" y="48" font-size="22" font-weight="800" fill="#fff" letter-spacing="1">{label}</text>'
    b += f'<text x="28" y="{h - 30}" font-size="20" fill="#fff" opacity=".85" font-family="DejaVu Sans Mono,monospace">•••• •••• •••• 4821</text>'
    b += icon
    return b


def plant(r=120):
    out = f'<circle r="{r * 0.55}" fill="#d9cbb3"/><circle r="{r * 0.45}" fill="#6b4f36"/>'
    for i in range(9):
        a = i * 40
        out += f'<ellipse cx="0" cy="{-r * 0.6}" rx="{r * 0.22}" ry="{r * 0.62}" transform="rotate({a})" fill="{"#2f8f5b" if i % 2 else "#3fa66b"}"/>'
    return out


def stamp(text, w=250, color='#d63031', rot=-10):
    return (f'<g transform="rotate({rot})" opacity=".88"><rect x="{-w / 2}" y="-34" width="{w}" height="68" rx="8" fill="none" stroke="{color}" stroke-width="6"/>'
            f'<text y="13" font-size="34" font-weight="900" text-anchor="middle" letter-spacing="3" fill="{color}">{text}</text></g>')


def label_rows(rows, x=40, y=130, w=360, gap=40, size=17, color='#46504c', hl=None):
    """Linhas "rótulo ........ valor" de um documento (holerite, extrato)."""
    out = ''
    for i, (a, b) in enumerate(rows):
        yy = y + i * gap
        if hl is not None and i == hl[0]:
            out += f'<rect x="{x - 10}" y="{yy - 24}" width="{w + 20}" height="34" rx="6" fill="{hl[1]}" opacity=".9"/>'
        out += f'<text x="{x}" y="{yy}" font-size="{size}" font-weight="600" fill="{color}">{a}</text>'
        out += f'<text x="{x + w}" y="{yy}" font-size="{size}" font-weight="800" text-anchor="end" fill="{color}">{b}</text>'
        out += f'<rect x="{x}" y="{yy + 12}" width="{w}" height="1.2" fill="#e1e5e3"/>'
    return out


def doc(w, h, header, accent, body):
    return (f'<rect width="{w}" height="{h}" rx="10" fill="url(#paper)"/>'
            f'<rect x="30" y="30" width="{w - 60}" height="56" rx="6" fill="{accent}" opacity=".13"/>'
            f'<text x="46" y="66" font-size="19" font-weight="800" letter-spacing="1.5" fill="{accent}">{header}</text>' + body)


def banknote(w=330, h=160, c1='#5fb37a', c2='#3c8f5a', value='R$'):
    return (f'<rect width="{w}" height="{h}" rx="8" fill="{c1}"/>'
            f'<rect x="12" y="12" width="{w - 24}" height="{h - 24}" rx="6" fill="none" stroke="{c2}" stroke-width="3"/>'
            f'<circle cx="{w * 0.7}" cy="{h / 2}" r="{h * 0.3}" fill="{c2}" opacity=".45"/>'
            f'<text x="30" y="{h / 2 + 14}" font-size="40" font-weight="900" fill="#fff" opacity=".9">{value}</text>'
            f'<rect x="30" y="{h - 42}" width="120" height="8" rx="4" fill="#fff" opacity=".45"/>')


def booklet(w=260, h=360, color='#1f4e99', title='CARTEIRA DE', title2='TRABALHO'):
    return (f'<rect width="{w}" height="{h}" rx="16" fill="{color}"/><rect x="0" y="0" width="22" height="{h}" rx="10" fill="#000" opacity=".15"/>'
            f'<circle cx="{w / 2 + 10}" cy="{h * 0.42}" r="46" fill="none" stroke="#e9c46a" stroke-width="5"/>'
            f'<circle cx="{w / 2 + 10}" cy="{h * 0.42}" r="20" fill="#e9c46a" opacity=".8"/>'
            f'<text x="{w / 2 + 10}" y="{h * 0.72}" font-size="20" font-weight="800" text-anchor="middle" fill="#e9c46a" letter-spacing="1.5">{title}</text>'
            f'<text x="{w / 2 + 10}" y="{h * 0.72 + 28}" font-size="20" font-weight="800" text-anchor="middle" fill="#e9c46a" letter-spacing="1.5">{title2}</text>')


def boleto(w=520, h=230, title='BOLETO', accent='#2d3436', amount='R$ 0,00'):
    import random as _r
    r = _r.Random(w)
    bars = ''
    x = 30
    while x < w - 40:
        bw = r.choice([2, 3, 4, 6])
        bars += f'<rect x="{x}" y="{h - 86}" width="{bw}" height="60" fill="#222"/>'
        x += bw + r.choice([2, 3, 4])
    return (f'<rect width="{w}" height="{h}" rx="6" fill="#fff"/>'
            f'<text x="30" y="44" font-size="20" font-weight="900" fill="{accent}" letter-spacing="2">{title}</text>'
            f'<text x="{w - 30}" y="44" font-size="22" font-weight="800" text-anchor="end" fill="{accent}">{amount}</text>'
            + lines(30, 66, w - 60, 2, gap=20, h=8, seed=w) + bars)


def keys():
    return ('<circle cx="0" cy="0" r="34" fill="none" stroke="#c9a227" stroke-width="10"/>'
            '<g transform="rotate(35)"><circle cx="70" cy="0" r="36" fill="#d4af37"/><circle cx="70" cy="0" r="12" fill="#00000030"/>'
            '<rect x="100" y="-11" width="150" height="22" rx="6" fill="#d4af37"/><path d="M200 11 v22 h14 v-12 h14 v16 h16 v-26" fill="#d4af37"/></g>'
            '<g transform="rotate(100)"><path d="M40 -40 l40 -36 l40 36 v50 h-80z" fill="#e76f51"/><rect x="68" y="-18" width="24" height="28" fill="#fff" opacity=".8"/></g>')


def house(s=1, wall='#f4e3c3', roof='#d9643a'):
    return (f'<g transform="scale({s})"><path d="M-170 -10 L0 -150 L170 -10 Z" fill="{roof}"/><rect x="-140" y="-20" width="280" height="200" fill="{wall}"/>'
            f'<rect x="-30" y="70" width="64" height="110" rx="6" fill="#8d5a3b"/><rect x="-115" y="20" width="62" height="56" rx="4" fill="#9fd3ff"/>'
            f'<rect x="55" y="20" width="62" height="56" rx="4" fill="#9fd3ff"/><rect x="80" y="-130" width="32" height="70" fill="#a24a2a"/></g>')


def jar(w=200, h=260, level=0.5, label='', color='#e9b949'):
    fill_h = (h - 40) * level
    coins = ''
    rr = random.Random(int(level * 100))
    for i in range(int(fill_h / 16)):
        coins += f'<ellipse cx="{w / 2 + rr.uniform(-40, 40):.0f}" cy="{h - 24 - i * 16:.0f}" rx="{w * 0.33:.0f}" ry="11" fill="{color}" stroke="#b8862b" stroke-width="3"/>'
    return (f'<rect x="0" y="30" width="{w}" height="{h - 30}" rx="34" fill="#dff1f7" opacity=".55" stroke="#ffffff" stroke-width="5"/>{coins}'
            f'<rect x="{w * 0.12}" y="0" width="{w * 0.76}" height="40" rx="10" fill="#8a6f4e"/>'
            f'<rect x="{w * 0.18}" y="{h * 0.45}" width="{w * 0.64}" height="64" rx="10" fill="#fff"/>'
            f'<text x="{w / 2}" y="{h * 0.45 + 45}" font-size="36" font-weight="900" text-anchor="middle" fill="#24302b">{label}</text>'
            f'<rect x="18" y="50" width="16" height="{h - 110}" rx="8" fill="#fff" opacity=".5"/>')


def chart_paper(w=460, h=340, pts=(), color='#e03131', title='', bars=None):
    b = f'<rect width="{w}" height="{h}" rx="10" fill="#fff"/>'
    if title:
        b += f'<text x="30" y="46" font-size="20" font-weight="800" fill="#2d3436" letter-spacing="1">{title}</text>'
    for i in range(5):
        b += f'<rect x="30" y="{80 + i * 50}" width="{w - 60}" height="1.5" fill="#e6eae8"/>'
    if bars:
        bw = (w - 60) / len(bars)
        for i, (v, c) in enumerate(bars):
            bh = v * (h - 110)
            b += f'<rect x="{30 + i * bw + bw * 0.18:.0f}" y="{h - 30 - bh:.0f}" width="{bw * 0.64:.0f}" height="{bh:.0f}" rx="6" fill="{c}"/>'
    if pts:
        n = len(pts)
        coords = [(30 + i * (w - 60) / (n - 1), h - 30 - v * (h - 120)) for i, v in enumerate(pts)]
        d = 'M' + ' L'.join(f'{x:.0f} {y:.0f}' for x, y in coords)
        b += f'<path d="{d}" fill="none" stroke="{color}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>'
        x, y = coords[-1]
        b += f'<circle cx="{x:.0f}" cy="{y:.0f}" r="12" fill="{color}"/>'
    return b


def box(w=420, h=320):
    return (f'<rect width="{w}" height="{h}" rx="6" fill="#c8995f"/><rect x="14" y="14" width="{w - 28}" height="{h - 28}" fill="#a9763f"/>'
            f'<rect x="-30" y="-10" width="{w + 60}" height="40" rx="4" fill="#d9ad74" transform="rotate(-3)"/>')


def clock(r=150, h=10, m=40, face='#fff', ring='#e63946'):
    ha = (h % 12 + m / 60) * 30
    ma = m * 6
    ticks = ''.join(f'<rect x="-3" y="{-r + 20}" width="6" height="{22 if i % 3 == 0 else 12}" rx="3" fill="#2d3436" transform="rotate({i * 30})"/>' for i in range(12))
    return (f'<circle r="{r + 18}" fill="{ring}"/><circle r="{r}" fill="{face}"/>{ticks}'
            f'<rect x="-7" y="{-r * 0.5}" width="14" height="{r * 0.55}" rx="7" fill="#2d3436" transform="rotate({ha})"/>'
            f'<rect x="-5" y="{-r * 0.78}" width="10" height="{r * 0.83}" rx="5" fill="#2d3436" transform="rotate({ma})"/>'
            f'<circle r="14" fill="{ring}"/><circle cx="{-r * 0.7}" cy="{-r - 20}" r="40" fill="{ring}"/><circle cx="{r * 0.7}" cy="{-r - 20}" r="40" fill="{ring}"/>')


def gift(w=260, ribbon='#e63946', paper='#2a9d8f'):
    return (f'<rect width="{w}" height="{w}" rx="14" fill="{paper}"/>'
            f'<rect x="{w / 2 - 22}" width="44" height="{w}" fill="{ribbon}"/><rect y="{w / 2 - 22}" width="{w}" height="44" fill="{ribbon}"/>'
            f'<ellipse cx="{w / 2 - 45}" cy="{w / 2}" rx="50" ry="28" fill="{ribbon}" stroke="#b71c1c" stroke-width="4"/>'
            f'<ellipse cx="{w / 2 + 45}" cy="{w / 2}" rx="50" ry="28" fill="{ribbon}" stroke="#b71c1c" stroke-width="4"/>'
            f'<circle cx="{w / 2}" cy="{w / 2}" r="26" fill="#c62828"/>')


def ornament(r=55, color='#e63946'):
    return (f'<circle r="{r}" fill="{color}"/><rect x="-14" y="{-r - 18}" width="28" height="22" rx="4" fill="#d4af37"/>'
            f'<ellipse cx="{-r * 0.35}" cy="{-r * 0.35}" rx="{r * 0.22}" ry="{r * 0.14}" fill="#fff" opacity=".5"/>')


def cake(r=190, candles=1):
    out = (f'<circle r="{r + 30}" fill="#fff"/><circle r="{r + 30}" fill="none" stroke="#e6e2da" stroke-width="4"/>'
           f'<circle r="{r}" fill="#f8c8d8"/><circle r="{r - 30}" fill="#fde2ea"/>')
    for i in range(14):
        out += f'<circle cx="{(r - 14)}" cy="0" r="14" fill="#fff" transform="rotate({i * 360 / 14})"/>'
    for i in range(18):
        rr = random.Random(i)
        out += f'<rect x="{rr.uniform(-r * 0.6, r * 0.6):.0f}" y="{rr.uniform(-r * 0.6, r * 0.6):.0f}" width="16" height="6" rx="3" fill="{rr.choice(["#e63946", "#2a9d8f", "#f4a261", "#457b9d"])}" transform="rotate({rr.uniform(0, 180):.0f})"/>'
    for i in range(candles):
        out += f'<circle cx="{-30 + i * 60}" cy="-10" r="16" fill="#4ea8de"/><circle cx="{-30 + i * 60}" cy="-10" r="7" fill="#ffd166"/>'
    return out


def watch_glasses():
    return ('<circle cx="-80" r="62" fill="#1d1d1d" opacity=".85"/><circle cx="80" r="62" fill="#1d1d1d" opacity=".85"/>'
            '<path d="M-20 -6 Q0 -22 20 -6" stroke="#1d1d1d" stroke-width="10" fill="none"/>'
            '<ellipse cx="-100" cy="-20" rx="18" ry="10" fill="#fff" opacity=".3"/><ellipse cx="60" cy="-20" rx="18" ry="10" fill="#fff" opacity=".3"/>'
            '<path d="M-140 -10 L-200 -150 M140 -10 L200 -150" stroke="#1d1d1d" stroke-width="10" stroke-linecap="round"/>')


def tag(text, w=200, color='#f4a261'):
    return (f'<path d="M0 0 H{w} V90 H0 L-50 45 Z" fill="{color}"/><circle cx="-18" cy="45" r="11" fill="#fff"/>'
            f'<text x="{w / 2 - 10}" y="60" font-size="40" font-weight="900" text-anchor="middle" fill="#fff">{text}</text>')


def gauge(r=200, value=0.4, label=''):
    import math
    out = f'<circle r="{r + 24}" fill="#fff"/>'
    segs = [('#2ecc71', 180, 240), ('#f1c40f', 240, 300), ('#e74c3c', 300, 360)]
    for c, a1, a2 in segs:
        x1, y1 = r * math.cos(math.radians(a1)), r * math.sin(math.radians(a1))
        x2, y2 = r * math.cos(math.radians(a2)), r * math.sin(math.radians(a2))
        out += f'<path d="M{x1:.0f} {y1:.0f} A{r} {r} 0 0 1 {x2:.0f} {y2:.0f}" stroke="{c}" stroke-width="38" fill="none"/>'
    a = 180 + 180 * value
    out += f'<rect x="-8" y="-8" width="{r * 0.85}" height="16" rx="8" fill="#2d3436" transform="rotate({a})"/><circle r="26" fill="#2d3436"/>'
    if label:
        out += f'<text y="{r * 0.55}" font-size="56" font-weight="900" text-anchor="middle" fill="#2d3436">{label}</text>'
    return out
