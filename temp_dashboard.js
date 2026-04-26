
/* ── CURSOR – visible from page load, starts at screen centre ── */
const glowEl = document.getElementById('cursor-glow');
// Initialise at viewport centre so ball shows before first mouse move
let cx = window.innerWidth / 2, cy = window.innerHeight / 2;
let tx = cx, ty = cy;
let mouseEverMoved = false;

document.addEventListener('mousemove', e => {
  tx = e.clientX; ty = e.clientY;
  mouseEverMoved = true;
});

(function cursorTick() {
  if (mouseEverMoved) {
    cx += (tx - cx) * 0.12;
    cy += (ty - cy) * 0.12;
  }
  glowEl.style.left = cx + 'px';
  glowEl.style.top  = cy + 'px';
  requestAnimationFrame(cursorTick);
})();

/* ─────────────────────────────────────────
   6 REALISTIC BUTTERFLY SPECIES
   Each: lf=left-forewing, lh=left-hindwing,
         rf=right-forewing, rh=right-hindwing
───────────────────────────────────────── */
const SPECIES = [

  /* 1 – MONARCH (orange/black) */
  { name:'monarch',
    lf:'M50 55 C38 18, 4 12, 12 44 C2 64, 26 80, 50 55',
    lh:'M50 59 C30 56, 4 70, 18 84 C28 92, 46 80, 50 59',
    rf:'M50 55 C62 18, 96 12, 88 44 C98 64, 74 80, 50 55',
    rh:'M50 59 C70 56, 96 70, 82 84 C72 92, 54 80, 50 59',
    g1:'#f97316', g2:'#ea580c', g3:'#c2410c', g4:'#fde68a', gBorder:'#1a0a00',
    spots:[{x:16,y:36,r:3,c:'#fff'},{x:22,y:24,r:2,c:'#fff'},{x:30,y:16,r:2,c:'#fff'},
           {x:84,y:36,r:3,c:'#fff'},{x:78,y:24,r:2,c:'#fff'},{x:70,y:16,r:2,c:'#fff'},
           {x:20,y:70,r:2,c:'#fff'},{x:80,y:70,r:2,c:'#fff'}],
    veins:[{d:'M50 55 C38 38 22 28 10 24',c:'rgba(0,0,0,0.45)',w:0.9},
           {d:'M50 55 C35 62 18 62 6 58',c:'rgba(0,0,0,0.35)',w:0.7},
           {d:'M50 55 C62 38 78 28 90 24',c:'rgba(0,0,0,0.45)',w:0.9},
           {d:'M50 55 C65 62 82 62 94 58',c:'rgba(0,0,0,0.35)',w:0.7}]
  },

  /* 2 – BLUE MORPHO (iridescent blue) */
  { name:'morpho',
    lf:'M50 54 C30 10,-2 18, 10 48 C0 68, 28 84, 50 54',
    lh:'M50 59 C26 56,-4 72, 14 88 C24 96, 44 82, 50 59',
    rf:'M50 54 C70 10,102 18, 90 48 C100 68, 72 84, 50 54',
    rh:'M50 59 C74 56,104 72, 86 88 C76 96, 56 82, 50 59',
    g1:'#38bdf8', g2:'#0ea5e9', g3:'#bae6fd', g4:'#e0f2fe', gBorder:'#0c4a6e',
    spots:[{x:22,y:40,r:7,c:'rgba(255,255,255,0.25)'},{x:28,y:28,r:4,c:'rgba(255,255,255,0.2)'},
           {x:78,y:40,r:7,c:'rgba(255,255,255,0.25)'},{x:72,y:28,r:4,c:'rgba(255,255,255,0.2)'},
           {x:20,y:70,r:4,c:'rgba(255,255,255,0.2)'},{x:80,y:70,r:4,c:'rgba(255,255,255,0.2)'}],
    veins:[{d:'M50 54 C36 36 20 26 10 22',c:'rgba(255,255,255,0.35)',w:0.8},
           {d:'M50 54 C33 65 16 68 5 62',c:'rgba(255,255,255,0.25)',w:0.7},
           {d:'M50 54 C64 36 80 26 90 22',c:'rgba(255,255,255,0.35)',w:0.8},
           {d:'M50 54 C67 65 84 68 95 62',c:'rgba(255,255,255,0.25)',w:0.7}]
  },

  /* 3 – SWALLOWTAIL (yellow/black) */
  { name:'swallowtail',
    lf:'M50 52 C32 6, 0 16, 8 46 C-2 68, 24 86, 50 52',
    lh:'M50 59 C26 52,-2 66, 10 86 C18 98, 40 86, 50 59',
    rf:'M50 52 C68 6,100 16, 92 46 C102 68, 76 86, 50 52',
    rh:'M50 59 C74 52,102 66, 90 86 C82 98, 60 86, 50 59',
    g1:'#fde047', g2:'#facc15', g3:'#fef08a', g4:'#854d0e', gBorder:'#1c1917',
    spots:[{x:15,y:50,r:5,c:'rgba(0,0,0,0.85)'},{x:20,y:38,r:3.5,c:'rgba(0,0,0,0.85)'},
           {x:28,y:26,r:2.5,c:'#000'},
           {x:85,y:50,r:5,c:'rgba(0,0,0,0.85)'},{x:80,y:38,r:3.5,c:'rgba(0,0,0,0.85)'},
           {x:72,y:26,r:2.5,c:'#000'},
           {x:16,y:72,r:6,c:'#3b82f6'},{x:84,y:72,r:6,c:'#3b82f6'},
           {x:16,y:72,r:3,c:'#ef4444'},{x:84,y:72,r:3,c:'#ef4444'}],
    veins:[{d:'M50 52 C36 34 18 22 8 18',c:'rgba(0,0,0,0.5)',w:1},
           {d:'M50 52 C32 64 14 70 2 66',c:'rgba(0,0,0,0.4)',w:0.8},
           {d:'M50 52 C64 34 82 22 92 18',c:'rgba(0,0,0,0.5)',w:1},
           {d:'M50 52 C68 64 86 70 98 66',c:'rgba(0,0,0,0.4)',w:0.8}]
  },

  /* 4 – PEACOCK (red/eye-spots) */
  { name:'peacock',
    lf:'M50 53 C28 8,-4 20, 8 50 C-4 72, 24 90, 50 53',
    lh:'M50 59 C24 54,-6 70, 10 90 C20 100, 44 88, 50 59',
    rf:'M50 53 C72 8,104 20, 92 50 C104 72, 76 90, 50 53',
    rh:'M50 59 C76 54,106 70, 90 90 C80 100, 56 88, 50 59',
    g1:'#dc2626', g2:'#b91c1c', g3:'#f87171', g4:'#7f1d1d', gBorder:'#1c0000',
    spots:[
      {x:20,y:44,r:10,c:'rgba(30,64,175,0.9)'},{x:20,y:44,r:6,c:'rgba(220,38,38,0.9)'},{x:20,y:44,r:3,c:'#000'},{x:20,y:44,r:1,c:'rgba(255,255,255,0.6)'},
      {x:80,y:44,r:10,c:'rgba(30,64,175,0.9)'},{x:80,y:44,r:6,c:'rgba(220,38,38,0.9)'},{x:80,y:44,r:3,c:'#000'},{x:80,y:44,r:1,c:'rgba(255,255,255,0.6)'},
      {x:22,y:74,r:7,c:'rgba(124,58,237,0.85)'},{x:22,y:74,r:3,c:'#000'},
      {x:78,y:74,r:7,c:'rgba(124,58,237,0.85)'},{x:78,y:74,r:3,c:'#000'}],
    veins:[{d:'M50 53 C34 35 18 24 8 20',c:'rgba(0,0,0,0.5)',w:0.9},
           {d:'M50 53 C32 67 14 74 4 70',c:'rgba(0,0,0,0.4)',w:0.7},
           {d:'M50 53 C66 35 82 24 92 20',c:'rgba(0,0,0,0.5)',w:0.9},
           {d:'M50 53 C68 67 86 74 96 70',c:'rgba(0,0,0,0.4)',w:0.7}]
  },

  /* 5 – GLASSWING (transparent teal) */
  { name:'glasswing',
    lf:'M50 54 C36 16, 4 24, 14 50 C4 70, 30 84, 50 54',
    lh:'M50 59 C30 57, 2 72, 18 88 C28 98, 46 82, 50 59',
    rf:'M50 54 C64 16, 96 24, 86 50 C96 70, 70 84, 50 54',
    rh:'M50 59 C70 57, 98 72, 82 88 C72 98, 54 82, 50 59',
    g1:'rgba(6,182,212,0.38)', g2:'rgba(34,211,238,0.32)', g3:'rgba(165,243,252,0.42)', g4:'rgba(99,102,241,0.35)', gBorder:'#0891b2',
    spots:[],
    veins:[{d:'M50 54 C38 36 24 28 14 24',c:'rgba(6,182,212,0.75)',w:1.1},
           {d:'M50 54 C36 66 22 72 10 68',c:'rgba(6,182,212,0.6)',w:0.9},
           {d:'M50 54 C62 36 76 28 86 24',c:'rgba(6,182,212,0.75)',w:1.1},
           {d:'M50 54 C64 66 78 72 90 68',c:'rgba(6,182,212,0.6)',w:0.9},
           {d:'M50 56 C44 68 38 76 32 82',c:'rgba(99,102,241,0.6)',w:0.8},
           {d:'M50 56 C56 68 62 76 68 82',c:'rgba(99,102,241,0.6)',w:0.8},
           {d:'M50 54 C44 42 40 34 36 28',c:'rgba(6,182,212,0.5)',w:0.7},
           {d:'M50 54 C56 42 60 34 64 28',c:'rgba(6,182,212,0.5)',w:0.7}]
  },

  /* 6 – PAINTED LADY (orange/brown/pink) */
  { name:'paintedlady',
    lf:'M50 53 C34 12, 2 20, 12 48 C2 68, 28 84, 50 53',
    lh:'M50 59 C28 55, 0 70, 16 88 C26 98, 44 82, 50 59',
    rf:'M50 53 C66 12, 98 20, 88 48 C98 68, 72 84, 50 53',
    rh:'M50 59 C72 55,100 70, 84 88 C74 98, 56 82, 50 59',
    g1:'#fb923c', g2:'#f97316', g3:'#fed7aa', g4:'#7c2d12', gBorder:'#431407',
    spots:[{x:14,y:54,r:4,c:'#000'},{x:20,y:42,r:3,c:'#000'},{x:28,y:28,r:2,c:'#fff'},
           {x:86,y:54,r:4,c:'#000'},{x:80,y:42,r:3,c:'#000'},{x:72,y:28,r:2,c:'#fff'},
           {x:16,y:74,r:4,c:'rgba(99,102,241,0.85)'},{x:84,y:74,r:4,c:'rgba(99,102,241,0.85)'},
           {x:14,y:62,r:2,c:'#fff'},{x:86,y:62,r:2,c:'#fff'}],
    veins:[{d:'M50 53 C36 36 22 28 12 24',c:'rgba(0,0,0,0.45)',w:0.9},
           {d:'M50 53 C34 66 18 72 6 68',c:'rgba(0,0,0,0.35)',w:0.7},
           {d:'M50 53 C64 36 78 28 88 24',c:'rgba(0,0,0,0.45)',w:0.9},
           {d:'M50 53 C66 66 82 72 94 68',c:'rgba(0,0,0,0.35)',w:0.7}]
  }
];

/* ─────────────────────────────────────────
   BUILD ONE BUTTERFLY SVG ELEMENT
───────────────────────────────────────── */
let _uid = 0;
function makeButterfly(spec, size, flapSpd, opacity) {
  const id = 'bf' + (_uid++);
  const s = spec;

  let spotsHTML = '';
  (s.spots||[]).forEach(sp => {
    spotsHTML += `<circle cx="${sp.x}" cy="${sp.y}" r="${sp.r}" fill="${sp.c}"/>`;
  });

  let veinsHTML = '';
  (s.veins||[]).forEach(v => {
    veinsHTML += `<path d="${v.d}" stroke="${v.c}" stroke-width="${v.w||0.8}" fill="none" stroke-linecap="round"/>`;
  });

  // Glow filter radius proportional to size
  const glowR = Math.round(size * 0.18);

  const svg = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
  <defs>
    <radialGradient id="g1${id}" cx="35%" cy="38%" r="65%">
      <stop offset="0%"   stop-color="${s.g3}" stop-opacity="0.95"/>
      <stop offset="45%"  stop-color="${s.g1}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${s.g2}" stop-opacity="0.78"/>
    </radialGradient>
    <radialGradient id="g2${id}" cx="65%" cy="38%" r="65%">
      <stop offset="0%"   stop-color="${s.g3}" stop-opacity="0.95"/>
      <stop offset="45%"  stop-color="${s.g1}" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${s.g2}" stop-opacity="0.78"/>
    </radialGradient>
    <radialGradient id="g3${id}" cx="35%" cy="55%" r="65%">
      <stop offset="0%"   stop-color="${s.g4}" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="${s.g2}" stop-opacity="0.7"/>
    </radialGradient>
    <radialGradient id="g4${id}" cx="65%" cy="55%" r="65%">
      <stop offset="0%"   stop-color="${s.g4}" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="${s.g2}" stop-opacity="0.7"/>
    </radialGradient>
    <filter id="gf${id}" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="${glowR*0.6}" result="blur"/>
      <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2.5 0" result="glow"/>
      <feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <g filter="url(#gf${id})">
    <!-- Hindwings (behind forewings) -->
    <path class="wl" d="${s.lh}" fill="url(#g3${id})" stroke="${s.gBorder}" stroke-width="0.5" stroke-opacity="0.55"/>
    <path class="wr" d="${s.rh}" fill="url(#g4${id})" stroke="${s.gBorder}" stroke-width="0.5" stroke-opacity="0.55"/>
    <!-- Forewings -->
    <path class="wl" d="${s.lf}" fill="url(#g1${id})" stroke="${s.gBorder}" stroke-width="0.6" stroke-opacity="0.6"/>
    <path class="wr" d="${s.rf}" fill="url(#g2${id})" stroke="${s.gBorder}" stroke-width="0.6" stroke-opacity="0.6"/>
    <!-- Veins -->
    ${veinsHTML}
    <!-- Spots / eye patterns -->
    ${spotsHTML}
    <!-- Body -->
    <ellipse cx="50" cy="56" rx="1.8" ry="9.5" fill="rgba(10,10,10,0.9)"/>
    <ellipse cx="50" cy="56" rx="0.7" ry="8" fill="rgba(255,255,255,0.3)"/>
    <!-- Head -->
    <circle cx="50" cy="45" r="2.4" fill="rgba(10,10,10,0.9)"/>
    <!-- Antennae -->
    <path d="M49.5 44 Q43 33 39 27" stroke="rgba(20,20,20,0.85)" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <circle cx="38.5" cy="26.5" r="1.8" fill="${s.g1}" opacity="0.95"/>
    <path d="M50.5 44 Q57 33 61 27" stroke="rgba(20,20,20,0.85)" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <circle cx="61.5" cy="26.5" r="1.8" fill="${s.g1}" opacity="0.95"/>
  </g>
</svg>`;

  const el = document.createElement('div');
  el.className = 'butterfly';
  el.style.cssText = `width:${size}px;height:${size}px;opacity:${opacity};--spd:${flapSpd}s;`;
  el.innerHTML = svg;
  return el;
}

/* ══════════════════════════════════════════
   PERCH TARGETS — solid elements butterflies
   can sit on: cards, nav, stats, titles …
══════════════════════════════════════════ */
const PERCH_SELECTORS = [
  '.feature-card', '.pricing-card', '.testimonial',
  '.stat', '.step', '.nav-logo', '.hero-badge',
  '.band-stat-num', '.btn-primary', '.dashboard-preview',
  '.hero-title', '.section-title', '.hero-sub',
  '.plan-price', '.author-name', '.dash-card'
];

let perchTargets = []; // [{x, y}] in document coords

function collectPerchTargets() {
  perchTargets = [];
  PERCH_SELECTORS.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width < 10 || r.height < 10) return;
      // Pick a random point on/near the element's surface edges
      const edge = Math.floor(Math.random() * 4);
      let px, py;
      if (edge === 0) { px = r.left + Math.random() * r.width;  py = r.top + window.scrollY; }          // top edge
      else if (edge === 1) { px = r.right; py = r.top + window.scrollY + Math.random() * r.height; }     // right edge
      else if (edge === 2) { px = r.left + Math.random() * r.width;  py = r.bottom + window.scrollY; }   // bottom edge
      else { px = r.left; py = r.top + window.scrollY + Math.random() * r.height; }                      // left edge
      perchTargets.push({ x: px, y: py });
      // Also add a center perch
      perchTargets.push({
        x: r.left + r.width  * (0.2 + Math.random() * 0.6),
        y: r.top  + r.height * (0.2 + Math.random() * 0.6) + window.scrollY
      });
    });
  });
}

window.addEventListener('load', () => {
  collectPerchTargets();
  spawnButterflies();
});
// Fallback if load already fired
setTimeout(() => { if (perchTargets.length === 0) { collectPerchTargets(); spawnButterflies(); } }, 300);

/* ══════════════════════════════════════════
   SPAWN BUTTERFLIES
══════════════════════════════════════════ */
const TOTAL  = 24;
const canvas = document.getElementById('butterfly-canvas');
const bflies = [];

function resizeCanvas() {
  canvas.style.height = Math.max(document.body.scrollHeight, window.innerHeight) + 'px';
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); collectPerchTargets(); });

function spawnButterflies() {
  // Avoid double-spawn
  if (bflies.length > 0) return;

  resizeCanvas();
  const docH = document.body.scrollHeight || window.innerHeight;

  for (let i = 0; i < TOTAL; i++) {
    const spec  = SPECIES[i % SPECIES.length];
    const size  = 28 + Math.random() * 52;
    const flapS = +(0.18 + Math.random() * 0.26).toFixed(2);
    const opa   = 0.55 + Math.random() * 0.42;
    const angle = Math.random() * Math.PI * 2;
    const baseV = 0.9 + Math.random() * 1.5;

    const el = makeButterfly(spec, size, flapS, opa);
    canvas.appendChild(el);

    // Half start perched on an element, half start flying
    const startPerched = perchTargets.length > 0 && Math.random() < 0.55;
    let px = Math.random() * window.innerWidth;
    let py = Math.random() * docH;
    if (startPerched && perchTargets.length) {
      const t = perchTargets[Math.floor(Math.random() * perchTargets.length)];
      px = t.x + (Math.random() - 0.5) * 30;
      py = t.y + (Math.random() - 0.5) * 20;
    }

    bflies.push({
      el, size, baseV, flapS,
      x: px, y: py,
      vx: Math.cos(angle) * baseV * 0.3,
      vy: Math.sin(angle) * baseV * 0.3,
      angle,
      turnRate: (Math.random() - 0.5) * 0.05,
      // STATE MACHINE:
      // 'perch'  → sitting still on an element
      // 'flee'   → rushing away from cursor
      // 'fly'    → free wandering
      // 'seek'   → heading toward a perch target
      state: startPerched ? 'perch' : 'fly',
      perchX: px, perchY: py,         // where currently perched
      perchTimer: 120 + Math.random() * 300, // frames to stay perched
      flyTimer:   80  + Math.random() * 200, // frames to wander before seeking perch
      seekTargetX: 0, seekTargetY: 0,
    });
  }
  flyLoop();
}

/* ══════════════════════════════════════════
   ANIMATION LOOP — state machine
══════════════════════════════════════════ */
const FLEE_R    = 160;   // px — cursor this close → flee
const ATTRACT_R = 220;   // px — cursor this close while flying → attract
const ATTRACT_F = 0.038; // pull strength toward cursor

function setFlapSpeed(b, spd) {
  // Dynamically change wing flap speed via CSS variable
  b.el.style.setProperty('--spd', spd + 's');
}

function pickPerch() {
  if (!perchTargets.length) return null;
  return perchTargets[Math.floor(Math.random() * perchTargets.length)];
}

function flyLoop() {
  const W    = window.innerWidth;
  const docH = Math.max(document.body.scrollHeight, window.innerHeight);
  canvas.style.height = docH + 'px';

  // Cursor in document coords
  const curDocX = cx;
  const curDocY = cy + window.scrollY;

  bflies.forEach(b => {
    const dx   = curDocX - b.x;
    const dy   = curDocY - b.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    /* ─ STATE: PERCH ─ */
    if (b.state === 'perch') {
      // Cursor came close → FLEE
      if (dist < FLEE_R) {
        b.state = 'flee';
        // Burst away from cursor
        const awayAng = Math.atan2(b.y - curDocY, b.x - curDocX);
        b.vx = Math.cos(awayAng) * b.baseV * 2.8;
        b.vy = Math.sin(awayAng) * b.baseV * 2.8;
        b.angle = awayAng;
        setFlapSpeed(b, b.flapS); // resume normal fast flap
        return;
      }
      // Tiny resting oscillation — looks like wings adjusting
      b.x = b.perchX + Math.sin(Date.now() * 0.002 + b.perchTimer) * 2;
      b.y = b.perchY + Math.cos(Date.now() * 0.0015 + b.perchTimer) * 1.5;
      b.perchTimer--;
      // Slow gentle flap while perched
      setFlapSpeed(b, (parseFloat(b.flapS) * 2.5).toFixed(2));
      if (b.perchTimer <= 0) {
        // Time to fly — lift off
        b.state = 'fly';
        b.flyTimer = 100 + Math.random() * 180;
        const liftAng = Math.random() * Math.PI * 2;
        b.vx = Math.cos(liftAng) * b.baseV;
        b.vy = Math.sin(liftAng) * b.baseV;
        b.angle = liftAng;
        setFlapSpeed(b, b.flapS);
      }
      // Don't apply transform here — done at the bottom with current x,y
      const rot = 0; // perched butterflies face "up" (wings level)
      b.el.style.transform = `translate(${b.x}px,${b.y}px) rotate(${rot}deg)`;
      return;
    }

    /* ─ STATE: FLEE ─ */
    if (b.state === 'flee') {
      // Move away from cursor
      if (dist > 0.5) {
        const awayAng = Math.atan2(b.y - curDocY, b.x - curDocX);
        b.vx += Math.cos(awayAng) * 0.18;
        b.vy += Math.sin(awayAng) * 0.18;
      }
      // Clamp flee speed
      const spd = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
      const cap = b.baseV * 3.2;
      if (spd > cap) { b.vx *= cap/spd; b.vy *= cap/spd; }

      b.x += b.vx; b.y += b.vy;
      b.vx *= 0.96; b.vy *= 0.96; // slight drag

      // Once far enough from cursor → switch to fly
      if (dist > FLEE_R * 1.8) {
        b.state = 'fly';
        b.flyTimer = 80 + Math.random() * 150;
        b.angle = Math.atan2(b.vy, b.vx);
      }
    }

    /* ─ STATE: FLY (free wander) ─ */
    else if (b.state === 'fly') {
      if (dist < ATTRACT_R && dist > 0.5) {
        // Cursor is near → attracted toward the glowing ball
        const str = ATTRACT_F * (1 - dist/ATTRACT_R) * (1 - dist/ATTRACT_R);
        b.vx += (dx/dist) * str;
        b.vy += (dy/dist) * str;
      } else {
        // Free organic wander
        b.angle += b.turnRate + (Math.random()-0.5)*0.03;
        if (Math.random() < 0.009) {
          b.angle += (Math.random()-0.5) * 1.1;
          b.turnRate = (Math.random()-0.5)*0.05;
        }
        b.vx += (Math.cos(b.angle)*b.baseV - b.vx)*0.038;
        b.vy += (Math.sin(b.angle)*b.baseV - b.vy)*0.038;
      }

      const spd = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
      const cap = dist < ATTRACT_R ? 4.5 : b.baseV * 1.3;
      if (spd > cap) { b.vx *= cap/spd; b.vy *= cap/spd; }
      b.x += b.vx; b.y += b.vy;

      // Timer counts down → seek a perch
      b.flyTimer--;
      if (b.flyTimer <= 0 && perchTargets.length) {
        const t = pickPerch();
        b.state = 'seek';
        b.seekTargetX = t.x + (Math.random()-0.5)*24;
        b.seekTargetY = t.y + (Math.random()-0.5)*16;
      }
    }

    /* ─ STATE: SEEK (flying toward a perch) ─ */
    else if (b.state === 'seek') {
      // Flee if cursor too close
      if (dist < FLEE_R) {
        b.state = 'flee';
        const awayAng = Math.atan2(b.y - curDocY, b.x - curDocX);
        b.vx = Math.cos(awayAng) * b.baseV * 2.5;
        b.vy = Math.sin(awayAng) * b.baseV * 2.5;
        b.angle = awayAng;
      } else {
        const sdx = b.seekTargetX - b.x;
        const sdy = b.seekTargetY - b.y;
        const sdist = Math.sqrt(sdx*sdx + sdy*sdy);

        if (sdist < 12) {
          // Arrived — land!
          b.state = 'perch';
          b.perchX = b.seekTargetX;
          b.perchY = b.seekTargetY;
          b.perchTimer = 140 + Math.random() * 280;
          b.vx = 0; b.vy = 0;
        } else {
          // Glide toward perch with slight curve
          b.vx += (sdx/sdist) * 0.12;
          b.vy += (sdy/sdist) * 0.12;
          b.angle += (Math.random()-0.5)*0.04; // slight drift
          const spd = Math.sqrt(b.vx*b.vx + b.vy*b.vy);
          const cap = b.baseV * 1.4;
          if (spd > cap) { b.vx *= cap/spd; b.vy *= cap/spd; }
          b.x += b.vx; b.y += b.vy;
        }
      }
    }

    // Wrap around page
    const m = b.size + 10;
    if (b.x > W + m)    b.x = -m;
    if (b.x < -m)       b.x =  W + m;
    if (b.y > docH + m) b.y = -m;
    if (b.y < -m)       b.y =  docH + m;

    const rot = Math.atan2(b.vy, b.vx) * (180/Math.PI) + 90;
    b.el.style.transform = `translate(${b.x}px,${b.y}px) rotate(${rot}deg)`;
  });

  requestAnimationFrame(flyLoop);
}
