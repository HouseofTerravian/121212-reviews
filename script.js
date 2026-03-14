/* ============================================
   121212.reviews — script.js
   ============================================ */

/* ── Scroll Progress ── */
(function () {
  const bar = document.getElementById('scrollProgress')
  if (!bar) return
  window.addEventListener('scroll', () => {
    const doc = document.documentElement
    const scrollTop = doc.scrollTop || document.body.scrollTop
    const scrollHeight = doc.scrollHeight - doc.clientHeight
    bar.style.width = scrollHeight > 0 ? (scrollTop / scrollHeight * 100) + '%' : '0'
  }, { passive: true })
})()

/* ── Nav Scroll ── */
(function () {
  const nav = document.getElementById('mainNav')
  if (!nav) return
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20)
  }, { passive: true })
})()

/* ── Hamburger ── */
(function () {
  const btn = document.getElementById('hamburger')
  const links = document.getElementById('navLinks')
  if (!btn || !links) return
  btn.addEventListener('click', () => links.classList.toggle('open'))
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !links.contains(e.target)) links.classList.remove('open')
  })
})()

/* ── Stat Counters ── */
(function () {
  const items = document.querySelectorAll('.stat-number[data-target]')
  if (!items.length) return
  const fmt = (n) => {
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K+'
    return n.toString() + '+'
  }
  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10)
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / 1800, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      el.textContent = fmt(Math.round(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.animated) {
        e.target.dataset.animated = 'true'
        animate(e.target)
      }
    })
  }, { threshold: 0.4 })
  items.forEach((el) => obs.observe(el))
})()

/* ── Category Filter (browse page) ── */
(function () {
  const btns = document.querySelectorAll('.filter-btn')
  const cards = document.querySelectorAll('.review-card[data-cat]')
  const countEl = document.getElementById('reviewCount')
  if (!btns.length || !cards.length) return

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btns.forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.dataset.filter
      let visible = 0
      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.cat === filter
        card.style.display = show ? '' : 'none'
        if (show) visible++
      })
      if (countEl) countEl.textContent = visible
    })
  })

  // Pre-filter from URL param
  const params = new URLSearchParams(window.location.search)
  const cat = params.get('cat')
  if (cat) {
    const target = document.querySelector(`.filter-btn[data-filter="${cat}"]`)
    if (target) target.click()
  }
})()

/* ── Scroll Reveal ── */
(function () {
  const style = document.createElement('style')
  style.textContent = `.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; } .reveal.visible { opacity: 1; transform: translateY(0); }`
  document.head.appendChild(style)
  const targets = document.querySelectorAll('.review-card, .category-card, .affiliate-card, .reviewer-card, .subdomain-card, .perk-item')
  targets.forEach((el) => el.classList.add('reveal'))
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
    })
  }, { threshold: 0.1 })
  targets.forEach((el) => obs.observe(el))
})()

/* ── Star Rating Input ── */
(function () {
  const container = document.getElementById('starRating')
  const hidden = document.getElementById('rating')
  if (!container || !hidden) return

  const btns = container.querySelectorAll('button')
  let selected = 0

  const render = (hovered) => {
    btns.forEach((btn, i) => {
      btn.classList.toggle('on', i < (hovered || selected))
    })
  }

  btns.forEach((btn, i) => {
    btn.addEventListener('mouseenter', () => render(i + 1))
    btn.addEventListener('mouseleave', () => render(0))
    btn.addEventListener('click', () => {
      selected = i + 1
      hidden.value = selected
      render(0)
    })
  })
})()

/* ── Reviewer Application Form ── */
(function () {
  const form = document.getElementById('reviewerForm')
  if (!form) return
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    const orig = btn.textContent
    btn.textContent = 'Submitting...'
    btn.disabled = true
    setTimeout(() => {
      btn.textContent = '✓ Application Submitted!'
      btn.style.background = 'var(--green)'
      form.reset()
      document.getElementById('starRating')?.querySelectorAll('button').forEach(b => b.classList.remove('on'))
      setTimeout(() => {
        btn.textContent = orig
        btn.style.background = ''
        btn.disabled = false
      }, 4000)
    }, 1200)
  })
})()

/* ── Active Nav ── */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach((link) => {
    if (link.getAttribute('href') === path) link.style.color = 'var(--text)'
  })
})()
