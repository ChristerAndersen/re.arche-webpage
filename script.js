// re.arche

(function () {

  // —— minimal screen builder ——
  function screen(accent, body) {
    return `<div style="height:100%;display:flex;flex-direction:column;background:#07091a">
      <div style="height:20px;background:${accent};flex-shrink:0;opacity:.78"></div>
      <div style="flex:1;padding:9px 8px;display:flex;flex-direction:column;gap:6px;overflow:hidden">${body}</div>
    </div>`;
  }

  const row = (w, h, bg, r = 3) =>
    `<div style="width:${w};height:${h}px;background:${bg};border-radius:${r}px;flex-shrink:0"></div>`;

  const grid = (cols, items, h, r = 5, gap = 4) =>
    `<div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:${gap}px;flex-shrink:0">
      ${items.map(bg => `<div style="height:${h}px;background:${bg};border-radius:${r}px"></div>`).join('')}
    </div>`;

  const bars = (hs, color) =>
    `<div style="display:flex;align-items:flex-end;gap:3px;height:50px;flex-shrink:0">
      ${hs.map(h => `<div style="flex:1;height:${h}px;background:${color};border-radius:2px 2px 0 0;opacity:${.35 + h / 90}"></div>`).join('')}
    </div>`;

  const ring = (size, color, sw = 2.5) =>
    `<div style="width:${size}px;height:${size}px;border-radius:50%;border:${sw}px solid ${color};align-self:center;flex-shrink:0"></div>`;

  const postRow = (avatarBg) =>
    `<div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
      <div style="width:20px;height:20px;border-radius:50%;background:${avatarBg};flex-shrink:0"></div>
      <div style="flex:1;display:flex;flex-direction:column;gap:3px">
        ${row('65%', 4, 'rgba(255,255,255,.13)')}
        ${row('42%', 3, 'rgba(255,255,255,.06)')}
      </div>
    </div>`;

  // —— per-project data ——
  const data = [
    { // Brunsohn — design portfolio
      name: 'Brunsohn',
      front: screen('#1e4fa8',
        grid(2, ['rgba(36,72,160,.65)', 'rgba(20,45,120,.80)', 'rgba(48,90,190,.50)', 'rgba(28,55,140,.75)'], 46) +
        row('66%', 6, 'rgba(255,255,255,.10)') +
        row('42%', 6, 'rgba(255,255,255,.06)')
      ),
      back: screen('#152e7a',
        row('100%', 70, 'rgba(24,50,120,.70)', 6) +
        row('60%', 6, 'rgba(255,255,255,.10)') +
        row('38%', 6, 'rgba(255,255,255,.06)') +
        row('50%', 6, 'rgba(255,255,255,.05)')
      )
    },
    { // Inertia Labs — engineering dashboard
      name: 'Inertia Labs',
      front: screen('#3d1fa0',
        row('100%', 38, 'rgba(55,28,150,.55)', 5) +
        bars([18, 28, 22, 38, 30, 44, 36, 48], 'rgba(110,75,230,.80)') +
        row('68%', 6, 'rgba(255,255,255,.10)')
      ),
      back: screen('#2a1480',
        bars([24, 36, 30, 48, 38, 54, 44, 58], 'rgba(130,95,245,.70)') +
        row('75%', 6, 'rgba(255,255,255,.10)') +
        row('52%', 6, 'rgba(255,255,255,.06)') +
        row('62%', 6, 'rgba(255,255,255,.05)')
      )
    },
    { // Immersion — focus / clarity
      name: 'Immersion',
      front: screen('#0b4a3c',
        `<div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:7px">
          ${ring(62, 'rgba(45,185,135,.55)')}
          ${ring(44, 'rgba(45,200,145,.35)', 1.5)}
          <div style="width:7px;height:7px;border-radius:50%;background:rgba(45,200,140,.70);margin-top:2px"></div>
        </div>` +
        row('48%', 5, 'rgba(45,200,135,.14)', 2)
      ),
      back: screen('#083530',
        row('100%', 54, 'rgba(18,88,70,.65)', 6) +
        row('58%', 5, 'rgba(255,255,255,.08)') +
        row('38%', 5, 'rgba(255,255,255,.05)') +
        row('68%', 5, 'rgba(255,255,255,.05)')
      )
    },
    { // SFN — social feed
      name: 'SFN',
      front: screen('#7a2c10',
        postRow('rgba(200,88,38,.55)') +
        row('100%', 42, 'rgba(140,55,18,.52)', 5) +
        postRow('rgba(175,68,28,.45)') +
        row('55%', 4, 'rgba(255,255,255,.07)')
      ),
      back: screen('#5a1e08',
        grid(2,
          ['rgba(140,58,18,.65)', 'rgba(100,38,10,.75)', 'rgba(165,68,24,.52)', 'rgba(120,48,14,.60)'],
          52, 4
        ) +
        row('70%', 5, 'rgba(255,255,255,.09)') +
        row('48%', 5, 'rgba(255,255,255,.06)')
      )
    },
    { // Sustina — sustainability
      name: 'Sustina',
      front: screen('#0b5228',
        bars([18, 28, 24, 42, 34, 52, 44, 58], 'rgba(48,195,96,.78)') +
        row('100%', 1, 'rgba(255,255,255,.05)') +
        row('70%', 6, 'rgba(255,255,255,.10)') +
        row('48%', 6, 'rgba(255,255,255,.06)')
      ),
      back: screen('#084020',
        `<div style="flex:1;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px">
          ${ring(56, 'rgba(48,195,88,.52)')}
          ${row('52px', 5, 'rgba(48,195,88,.22)', 2)}
        </div>` +
        row('62%', 5, 'rgba(255,255,255,.08)')
      )
    }
  ];

  // —— DOM ——
  const items      = document.querySelectorAll('.project');
  const card       = document.querySelector('.card');
  if (!card || !items.length) return;

  const cardTitle  = card.querySelector('.card-title');
  const phoneBack  = card.querySelector('.phone--back');
  const phoneFront = card.querySelector('.phone--front');

  function applyData(d) {
    if (cardTitle)  cardTitle.textContent = d.name;
    if (phoneBack)  phoneBack.innerHTML   = d.back;
    if (phoneFront) phoneFront.innerHTML  = d.front;
  }

  function swapCard(d) {
    card.classList.add('card--updating');
    setTimeout(() => {
      applyData(d);
      card.classList.remove('card--updating');
    }, 160);
  }

  applyData(data[0]);

  let resetTimer;
  const defaultData = data[0];

  items.forEach((item, i) => {
    item.addEventListener('mouseenter', () => { clearTimeout(resetTimer); swapCard(data[i]); });
    item.addEventListener('focus',      () => { clearTimeout(resetTimer); swapCard(data[i]); });
    item.addEventListener('mouseleave', () => { resetTimer = setTimeout(() => swapCard(defaultData), 500); });
    item.addEventListener('blur',       () => { resetTimer = setTimeout(() => swapCard(defaultData), 500); });
  });

}());

// —— Identity capsule ——
(function () {
  const pill     = document.querySelector('.location-pill');
  const pillText = document.querySelector('.pill-text');
  if (!pill || !pillText) return;

  const phrases = [
    'Norway · Worldwide',
    'Built on Clarity',
    'Less Noise · More Meaning',
    'Digital Minimalism',
    'Back to First Principles',
    'Calm Technology',
  ];
  let idx = 0;

  function rotate() {
    pillText.classList.add('fading');
    setTimeout(() => {
      idx = (idx + 1) % phrases.length;
      pillText.textContent = phrases[idx];
      pillText.classList.remove('fading');
    }, 480);
  }

  function schedule() {
    const delay = 6000 + Math.random() * 2000;
    setTimeout(() => { rotate(); schedule(); }, delay);
  }
  schedule();

  // Micro-parallax — 1.5px max, respects reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.addEventListener('mousemove', (e) => {
    if (prefersReduced.matches) return;
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const x  = ((e.clientX - cx) / cx) * 1.5;
    const y  = ((e.clientY - cy) / cy) * 1.5;
    pill.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
  });
}());

// —— View router ——
(function () {
  const FADE = 320;
  const viewEls = {
    home:    document.getElementById('view-home'),
    connect: document.getElementById('view-connect'),
    about:   document.getElementById('view-about'),
  };

  let current = 'home';

  function setNavActive(viewId) {
    document.querySelectorAll('.nav-link[data-view]').forEach(l => {
      l.classList.toggle('nav-link--active', l.dataset.view === viewId);
    });
  }

  function switchTo(viewId) {
    if (viewId === current || !viewEls[viewId]) return;
    const from = viewEls[current];
    const to   = viewEls[viewId];
    current = viewId;
    setNavActive(viewId);

    // Fade out current
    from.classList.add('view--fading');
    setTimeout(() => {
      from.classList.add('view--hidden');
      from.classList.remove('view--fading');
      // Prepare next at opacity 0, then reveal
      to.style.opacity = '0';
      to.classList.remove('view--hidden');
      requestAnimationFrame(() => requestAnimationFrame(() => {
        to.style.opacity = '';
      }));
    }, FADE);
  }

  // Wire nav links
  document.querySelectorAll('.nav-link[data-view]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      switchTo(link.dataset.view);
    });
  });

  // Logo → home
  document.querySelector('.logo').addEventListener('click', e => {
    e.preventDefault();
    switchTo('home');
  });

  // No nav item active on home view
  setNavActive(null);
}());
