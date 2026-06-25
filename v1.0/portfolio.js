/* ============================================================
   Thiago Diniz · Portfolio — interactions & cinematic scroll
   ============================================================ */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches || window.innerWidth < 768;

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    // soft flash on the page when toggling
    const flash = document.createElement('div');
    Object.assign(flash.style, {
      position: 'fixed', inset: 0, background: 'rgba(149,124,61,0.06)',
      pointerEvents: 'none', zIndex: 9999, opacity: 0, transition: 'opacity 0.4s',
    });
    document.body.appendChild(flash);
    requestAnimationFrame(() => flash.style.opacity = 1);
    setTimeout(() => { flash.style.opacity = 0; setTimeout(() => flash.remove(), 400); }, 200);
  });

  /* ---------- Cursor mesh tracking ---------- */
  const mesh = document.getElementById('cursorMesh');
  const spot = document.getElementById('cursorSpot');
  if (mesh && !isTouch) {
    let tx = -300, ty = -300, cx = -300, cy = -300, raf = null;
    let active = false, idleTimer = null;
    const setPos = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      document.documentElement.style.setProperty('--mx', cx + 'px');
      document.documentElement.style.setProperty('--my', cy + 'px');
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(setPos);
      } else { raf = null; }
    };
    window.addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!active) {
        mesh.classList.add('active');
        spot.classList.add('active');
        active = true;
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mesh.classList.remove('active');
        spot.classList.remove('active');
        active = false;
      }, 1800);
      if (!raf) raf = requestAnimationFrame(setPos);
    }, { passive: true });
    window.addEventListener('pointerleave', () => {
      mesh.classList.remove('active');
      spot.classList.remove('active');
      active = false;
    });
  }

  /* ---------- Card local cursor glow ---------- */
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--cx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--cy', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- Magnetic buttons ---------- */
  if (!isTouch && !reduceMotion) {
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const mx = e.clientX - r.left - r.width / 2;
        const my = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${mx * 0.18}px, ${my * 0.18}px)`;
      });
      btn.addEventListener('pointerleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ---------- Floating particles (ambient) ---------- */
  if (!reduceMotion) {
    const container = document.getElementById('particles');
    const count = isTouch ? 8 : 22;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = 1 + Math.random() * 2.5;
      p.style.width = p.style.height = size + 'px';
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.top = (100 + Math.random() * 30) + 'vh';
      p.style.opacity = (0.15 + Math.random() * 0.45);
      container.appendChild(p);

      const dur = 14 + Math.random() * 22;
      const drift = (Math.random() - 0.5) * 200;
      p.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0 },
          { opacity: p.style.opacity, offset: 0.15 },
          { opacity: p.style.opacity, offset: 0.85 },
          { transform: `translate(${drift}px, -130vh)`, opacity: 0 },
        ],
        { duration: dur * 1000, iterations: Infinity, delay: -Math.random() * dur * 1000, easing: 'linear' }
      );
    }
  }

  /* ---------- Ambient canvas: drifting blue/gold gradient blobs ---------- */
  const ac = document.getElementById('ambientCanvas');
  if (ac && !reduceMotion) {
    const ctx = ac.getContext('2d');
    let w = ac.width = window.innerWidth;
    let h = ac.height = window.innerHeight;
    const blobs = [];
    const N = isTouch ? 3 : 5;
    for (let i = 0; i < N; i++) {
      blobs.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: 180 + Math.random() * 260,
        c: i % 2 === 0 ? [0, 60, 120] : [149, 124, 61],
      });
    }
    let lastT = 0;
    function frame(t) {
      if (t - lastT < 33) { requestAnimationFrame(frame); return; }
      lastT = t;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      blobs.forEach(b => {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0.12)`);
        g.addColorStop(1, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
    window.addEventListener('resize', () => {
      w = ac.width = window.innerWidth;
      h = ac.height = window.innerHeight;
    });
  }

  /* ---------- GSAP cinematic scroll ---------- */
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  if (reduceMotion) return; // bail before motion-heavy stuff

  /* Hero entrance */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  heroTl
    .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
    .from('.hero-name .hero-line', { opacity: 0, y: 40, stagger: 0.12, duration: 0.9 }, '-=0.2')
    .from('.hero-role', { opacity: 0, y: 20, duration: 0.6 }, '-=0.5')
    .from('.hero-bio', { opacity: 0, y: 15, duration: 0.6, stagger: 0.12 }, '-=0.3')
    .from('.hero-btn', { opacity: 0, y: 12, stagger: 0.15, duration: 0.5 }, '-=0.3')
    .from('.hero-photo', { opacity: 0, scale: 0.85, rotate: -4, duration: 1.0, ease: 'back.out(1.4)' }, '-=0.8');

  /* Hero scroll-out: blur + fade + scale (Apple-style)
     fromTo with explicit from-state so the scrub doesn't capture the
     entrance's opacity:0 and pin elements as invisible. */
  gsap.fromTo('#hero .hero-name, #hero .hero-role, #hero .hero-bio, #hero .hero-ctas',
    { opacity: 1, y: 0, filter: 'blur(0px)' },
    {
      opacity: 0.05, y: -80, filter: 'blur(8px)',
      immediateRender: false,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  gsap.fromTo('#hero .hero-photo',
    { scale: 1, opacity: 1, filter: 'blur(0px)' },
    {
      scale: 0.85, opacity: 0.2, filter: 'blur(6px)',
      immediateRender: false,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  gsap.to('#scrollInd', {
    opacity: 0, scrollTrigger: { trigger: '#hero', start: 'top top', end: '20% top', scrub: true },
  });

  /* Orb parallax */
  gsap.utils.toArray('.orb').forEach(orb => {
    const speed = parseFloat(orb.dataset.parallax || '0.4');
    gsap.to(orb, {
      y: () => window.innerHeight * speed,
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  });
  /* Slow drift even when stopped */
  gsap.to('[data-orb="1"]', { x: '+=40', y: '+=30', duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  gsap.to('[data-orb="2"]', { x: '-=30', y: '-=25', duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  gsap.to('[data-orb="3"]', { x: '-=40', y: '+=25', duration: 10, ease: 'sine.inOut', yoyo: true, repeat: -1 });

  /* Ambient glow shifts as you scroll */
  ScrollTrigger.create({
    trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true,
    onUpdate: self => {
      const p = self.progress;
      document.documentElement.style.setProperty('--glow-y', (20 + p * 60) + '%');
    },
  });

  /* Section intro reveal — eyebrow / heading / sub with blur+y */
  document.querySelectorAll('.section-intro').forEach(intro => {
    const eyebrow = intro.querySelector('.intro-eyebrow');
    const heading = intro.querySelector('.intro-heading');
    const sub = intro.querySelector('.intro-sub');
    const els = [eyebrow, heading, sub].filter(Boolean);
    gsap.from(els, {
      opacity: 0, y: 40, filter: 'blur(10px)', stagger: 0.12, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: intro, start: 'top 80%', toggleActions: 'play none none none' },
    });
  });

  /* Section glows ride scroll */
  document.querySelectorAll('.section-glow').forEach(g => {
    gsap.fromTo(g, { opacity: 0, y: 100 }, {
      opacity: 1, y: -100,
      scrollTrigger: { trigger: g.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  /* Expertise cards: stagger + slight 3D enter */
  gsap.utils.toArray('.expertise-grid .card').forEach((card, i) => {
    gsap.from(card, {
      opacity: 0, y: 60, rotateX: 8, transformPerspective: 1000, duration: 0.9, ease: 'power3.out', delay: i * 0.12,
      scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });

  /* Card subtle tilt on mouse move */
  if (!isTouch) {
    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(1000px) rotateX(${-py * 4}deg) rotateY(${px * 4}deg) translateY(-4px)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  /* ---------- Timeline: cinematic horizontal corridor ---------- */
  const tlSection = document.getElementById('timeline');
  const track = document.getElementById('track');
  const isMobile = window.innerWidth < 768;

  if (tlSection && track && !isMobile) {
    const checkpoints = Array.from(track.querySelectorAll('.checkpoint'));
    const trail = document.getElementById('routeTrail');
    const hudBar = document.getElementById('hudBar');
    const cpNum = document.getElementById('cpNum');
    const cpYear = document.getElementById('cpYear');

    // Measure track width once it's laid out
    const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);

    // Initial near/far state — only checkpoint 1 active
    checkpoints.forEach((cp, i) => cp.classList.add(i === 0 ? 'is-near' : 'is-far'));

    ScrollTrigger.create({
      trigger: tlSection,
      start: 'top top',
      end: () => '+=' + (window.innerHeight * 5),
      pin: '.timeline-pin',
      scrub: 0.8,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const p = self.progress;
        const distance = getDistance();
        gsap.set(track, { x: -p * distance });

        // Route trail width follows progress
        if (trail) trail.style.setProperty('--route-w', (p * 100) + '%');
        track.querySelector('.route-trail')?.style.setProperty('--route-w', (p * 100) + '%');
        track.querySelector('.route-traveler')?.style.setProperty('--route-w', (p * 100) + '%');

        // HUD bar
        if (hudBar) hudBar.style.width = (p * 100) + '%';

        // Determine active checkpoint by viewport center, and set near/far
        // (whichever cp is closest to the center is always "near" — avoids dead
        // zones where every card gets blurred between stations)
        const vc = window.innerWidth / 2;
        let activeIdx = 0, minDist = Infinity;
        const dists = checkpoints.map((cp, i) => {
          const r = cp.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const d = Math.abs(cx - vc);
          if (d < minDist) { minDist = d; activeIdx = i; }
          return d;
        });
        checkpoints.forEach((cp, i) => {
          if (i === activeIdx) {
            cp.classList.add('is-near');
            cp.classList.remove('is-far');
          } else {
            cp.classList.add('is-far');
            cp.classList.remove('is-near');
          }
        });

        const active = checkpoints[activeIdx];
        if (cpNum) cpNum.textContent = String(activeIdx + 1).padStart(2, '0');
        if (cpYear && active) cpYear.textContent = active.dataset.year || '';
      },
    });

    // Streak spawner (sci-fi corridor speed lines)
    const streakHost = document.getElementById('tunnelStreaks');
    if (streakHost) {
      const spawn = () => {
        const s = document.createElement('div');
        s.className = 'streak';
        const angle = Math.random() * 360;
        const dur = 700 + Math.random() * 900;
        s.style.transform = `translate(-50%, 0) rotate(${angle}deg)`;
        streakHost.appendChild(s);
        s.animate(
          [
            { transform: `translate(-50%, 0) rotate(${angle}deg) scaleY(0.1)`, opacity: 0 },
            { opacity: 0.95, offset: 0.15 },
            { transform: `translate(-50%, 0) rotate(${angle}deg) scaleY(1.4)`, opacity: 0 },
          ],
          { duration: dur, easing: 'cubic-bezier(.2,.6,.2,1)' }
        ).onfinish = () => s.remove();
      };
      const streakLoop = () => {
        const inView = tlSection.getBoundingClientRect().top < window.innerHeight && tlSection.getBoundingClientRect().bottom > 0;
        if (inView) spawn();
        setTimeout(streakLoop, 70 + Math.random() * 120);
      };
      streakLoop();
    }

    // Section-intro reveal already on .section-intro inside HUD
    ScrollTrigger.refresh();
  } else if (tlSection) {
    // Mobile: just mark all near so cards render normally
    tlSection.querySelectorAll('.checkpoint').forEach(cp => {
      cp.classList.add('is-near');
      cp.classList.remove('is-far');
    });
  }

  /* Stack groups stagger */
  gsap.utils.toArray('.stack-group').forEach((g, i) => {
    gsap.from(g, {
      opacity: 0, y: 30, filter: 'blur(6px)', duration: 0.7, ease: 'power3.out', delay: i * 0.08,
      scrollTrigger: { trigger: g, start: 'top 90%', toggleActions: 'play none none none' },
    });
    gsap.from(g.querySelectorAll('.pill'), {
      opacity: 0, y: 12, scale: 0.92, duration: 0.45, stagger: 0.04, ease: 'power2.out',
      scrollTrigger: { trigger: g, start: 'top 90%', toggleActions: 'play none none none' },
    });
  });

  /* Contact section: socials stagger; energy line sweep */
  gsap.from('#contact .social-link', {
    opacity: 0, y: 24, duration: 0.7, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: '#contact', start: 'top 75%', toggleActions: 'play none none none' },
  });
  gsap.from('#contact .contact-glow', {
    scale: 0.5, opacity: 0, duration: 1.2, ease: 'power2.out',
    scrollTrigger: { trigger: '#contact', start: 'top 80%', toggleActions: 'play none none none' },
  });
  gsap.to('#energyLine', { x: '400%', duration: 2.8, ease: 'none', repeat: -1 });

  /* Scroll progress side rail */
  const rail = document.getElementById('progressRail');
  if (rail) {
    ScrollTrigger.create({
      trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: self => rail.style.setProperty('--rail-h', (self.progress * 100) + '%'),
    });
  }

  /* Live mini simulations */
  setInterval(() => {
    document.querySelectorAll('[data-odd]').forEach(el => {
      const base = el.dataset.odd === '1' ? 1.85 : 2.45;
      const jitter = (Math.random() - 0.5) * 0.12;
      el.textContent = (base + jitter).toFixed(2);
    });
  }, 1400);
  setInterval(() => {
    document.querySelectorAll('#miniChart .mini-bar').forEach(b => {
      b.style.height = (25 + Math.random() * 70) + '%';
    });
  }, 1800);
  let session = 12480;
  setInterval(() => {
    session += Math.floor(Math.random() * 8);
    const el = document.querySelector('[data-counter="sessions"]');
    if (el) el.textContent = session.toLocaleString();
  }, 1200);
})();
