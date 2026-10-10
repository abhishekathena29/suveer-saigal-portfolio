import { useEffect, useState, type ReactNode } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  ACADEMICS,
  BEYOND,
  EMAIL,
  GALLERY,
  HERO_TAGS,
  HONORS,
  LEADERSHIP,
  NAV,
  NEEV_MILESTONES,
  NEEV_PILLARS,
  NEEV_URL,
  PRESS,
  PROGRAMS,
  RESEARCH,
  RESUME,
  RESUME_URL,
  STATS,
  type ResumeEntry,
} from './data'
import './App.css'

// Fades elements with the `reveal` class in as they scroll into view.
// Re-runs on every route change so newly mounted pages animate too.
function useReveal(key: string) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="brand" onClick={close}>
          Suveer Saigal
        </Link>
        <button
          className={`menu-btn ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {NAV.map(({ path, label }) => (
            <NavLink key={path} to={path} onClick={close}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

function PageHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: ReactNode }) {
  return (
    <div className="page-head">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="fade-up" style={{ animationDelay: '0.1s' }}>
        {title}
      </h1>
      {intro && (
        <p className="body-lg fade-up" style={{ animationDelay: '0.2s' }}>
          {intro}
        </p>
      )}
    </div>
  )
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-head reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  )
}

/* ---------- Landing ---------- */

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="ripple r1" />
        <span className="ripple r2" />
        <span className="ripple r3" />
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} className={`dot d${i % 7}`} style={{ left: `${(i * 7.3 + 4) % 96}%` }} />
        ))}
      </div>
      <div className="hero-photo fade-in">
        <div className="photo-ring" />
        <img src="/images/suveer.jpeg" alt="Portrait of Suveer Saigal" />
      </div>
      <h1 className="hero-name fade-up" style={{ animationDelay: '0.2s' }}>
        Suveer Saigal
      </h1>
      <ul className="hero-tags">
        {HERO_TAGS.map((t, i) => (
          <li key={t} className="fade-up" style={{ animationDelay: `${0.45 + i * 0.1}s` }}>
            {t}
          </li>
        ))}
      </ul>
      <a href="#about" className="scroll-cue fade-in" style={{ animationDelay: '1.2s' }} aria-label="Scroll to About">
        <span />
      </a>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <SectionHead eyebrow="About" title="Curious about how small systems change big lives." />
      <div className="about-grid">
        <div className="reveal">
          <p className="body-lg">
            I'm a student at The Shri Ram School, Moulsari, where I've studied since 2013, consistently ranking among the
            top three in my class and receiving Scholar of the Year along with 30+ subject
            excellence awards. My interests sit where economics, entrepreneurship and public policy
            meet, and most of what I do outside the classroom starts with sitting down and
            listening to the people a problem actually affects.
          </p>
          <div className="academics">
            {ACADEMICS.map((a) => (
              <div key={a.label} className="chip-stat">
                <strong>{a.value}</strong>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="beyond reveal">
          <h3>Beyond the books</h3>
          {BEYOND.map((b) => (
            <div key={b.title} className="beyond-item">
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NeevIntro() {
  return (
    <div className="neev-intro">
      <div className="reveal">
        <p className="quote">“Because talent is everywhere. Access is not.”</p>
        <p className="body-lg">
          In an early meeting, we asked a group of women a simple question: how much do you earn,
          and what is your bank balance? Most couldn't answer. Not because they didn't work hard,
          but because no one had taught them to track their own money. Neev Ventures started there
          in January 2025, and today works across six states with women from some of the most
          overlooked communities.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href={NEEV_URL} target="_blank" rel="noreferrer">
            Visit neevventures.in ↗
          </a>
        </div>
      </div>
      <figure className="neev-figure reveal">
        <img src="/images/neev-hero.jpg" alt="Suveer with women from a self-help group in Haryana" />
        <img className="neev-logo" src="/images/neev-logo.png" alt="Neev Ventures logo" />
      </figure>
    </div>
  )
}

function Pillars() {
  return (
    <div className="pillars">
      {NEEV_PILLARS.map((p, i) => (
        <div key={p.title} className="pillar reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
          <span className="pillar-num">0{i + 1}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <section className="section">
        <SectionHead eyebrow="Featured initiative" title="Neev Ventures" />
        <NeevIntro />
        <ul className="stats reveal">
          {STATS.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
        <Pillars />
        <div className="more reveal">
          <Link className="btn ghost" to="/neev-ventures">
            See the full story, photos and recognition →
          </Link>
        </div>
      </section>
    </>
  )
}

/* ---------- Pages ---------- */

function NeevPage() {
  return (
    <>
      <PageHead
        eyebrow="Featured initiative"
        title="Neev Ventures"
        intro="A social enterprise advancing women-led self-help groups and underserved women entrepreneurs through financial literacy, market access, branding and enterprise support."
      />
      <NeevIntro />
      <Pillars />

      <ul className="milestones reveal">
        {NEEV_MILESTONES.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>

      <div className="marquee reveal" aria-label="Photos from Neev Ventures">
        <div className="marquee-track">
          {[...GALLERY, ...GALLERY].map((g, i) => (
            <img key={i} src={g.src} alt={i < GALLERY.length ? g.alt : ''} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="feature reveal">
        <img src="/images/kiran-bedi.jpg" alt="Suveer receiving a certificate from Dr. Kiran Bedi" />
        <div>
          <p className="eyebrow">Recognition</p>
          <h3>Youngest Entrepreneur Mentor Award</h3>
          <p>
            Presented by Dr. Kiran Bedi, India's first woman IPS officer, at the Navjyoti India
            Foundation convocation, for mentoring women entrepreneurs across underserved
            communities.
          </p>
        </div>
      </div>
    </>
  )
}

function ExperiencePage() {
  return (
    <>
      <PageHead eyebrow="Experience & Leadership" title="Work in the field and beyond it." />
      <ol className="timeline">
        {LEADERSHIP.map((r) => (
          <li key={r.org + r.title} className="reveal">
            <div className="tl-meta">{r.period}</div>
            <div className="tl-card">
              <h3>{r.title}</h3>
              <p className="tl-org">{r.org}</p>
              <ul>
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

function ResearchPage() {
  return (
    <>
      <PageHead eyebrow="Research & Learning" title="Asking questions with data." />
      <div className="research-grid">
        {RESEARCH.map((r, i) => (
          <article key={r.title} className="card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="tag">{r.tag}</span>
            <h3>{r.title}</h3>
            <p>{r.meta}</p>
          </article>
        ))}
      </div>
      <div className="programs reveal">
        <h3>Summer programs</h3>
        <ul>
          {PROGRAMS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

function HonorsPage() {
  return (
    <>
      <PageHead eyebrow="Honors & Awards" title="Recognition along the way." />
      <div className="honors-layout">
        <ul className="honors">
          {HONORS.map((h, i) => (
            <li key={h.title} className="reveal" style={{ transitionDelay: `${(i % 2) * 0.06}s` }}>
              <div>
                <h3>{h.title}</h3>
                <p>{h.org}</p>
              </div>
              {h.year && <span className="year">{h.year}</span>}
            </li>
          ))}
        </ul>
        <img
          className="honors-img reveal"
          src="/images/blue-ocean.jpeg"
          alt="Blue Ocean Competition Top 100 certificate for Suveer Saigal"
        />
      </div>
    </>
  )
}

function PressPage() {
  return (
    <>
      <PageHead eyebrow="In the press" title="Stories that spotlight the work." />
      <div className="press-grid">
        {PRESS.map((p, i) => (
          <a
            key={p.url}
            className="press-card reveal"
            href={p.url}
            target="_blank"
            rel="noreferrer"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className="outlet">{p.outlet}</span>
            <h3>{p.title}</h3>
            <span className="read">Read story →</span>
          </a>
        ))}
      </div>
    </>
  )
}

function ResumeBlock({ title, entries }: { title: string; entries: ResumeEntry[] }) {
  return (
    <section className="rs-block reveal">
      <h2>{title}</h2>
      {entries.map((e) => (
        <div key={e.title + e.org} className="rs-entry">
          <div className="rs-entry-head">
            <h3>{e.title}</h3>
            {e.period && <span className="rs-period">{e.period}</span>}
          </div>
          {e.org && <p className="rs-org">{e.org}</p>}
          {e.points && (
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  )
}

function ResumePage() {
  const { education: ed } = RESUME
  return (
    <div className="resume">
      <header className="rs-top fade-up">
        <img src="/images/suveer.jpeg" alt="" />
        <div>
          <p className="eyebrow">Résumé</p>
          <h1>Suveer Saigal</h1>
          <p className="rs-contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>·</span>
            <a href={NEEV_URL} target="_blank" rel="noreferrer">
              neevventures.in
            </a>
          </p>
        </div>
        <a className="btn primary" href={RESUME_URL} download="Resume - Suveer Saigal.pdf">
          Download PDF ↓
        </a>
      </header>

      <div className="rs-grid">
        <aside className="rs-side">
          <section className="rs-block reveal">
            <h2>Education</h2>
            <h3>{ed.school}</h3>
            <p className="rs-org">{ed.board}</p>
            <p className="rs-period">{ed.period}</p>
            <ul className="rs-pills">
              {ed.grades.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <ul>
              {ed.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>

          <section className="rs-block reveal">
            <h2>Testing</h2>
            <div className="rs-scores">
              {RESUME.testing.map((t) => (
                <div key={t.label} className={t.detail ? 'wide' : ''}>
                  <strong>{t.value}</strong>
                  <span>{t.label}</span>
                  {t.detail && <small>{t.detail}</small>}
                </div>
              ))}
            </div>
          </section>

          <section className="rs-block reveal">
            <h2>Skills</h2>
            {RESUME.skills.map((g) => (
              <div key={g.label} className="rs-skill">
                <h3>{g.label}</h3>
                <ul className="rs-pills">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </aside>

        <div className="rs-main">
          <ResumeBlock title="Honors & Awards" entries={RESUME.honors} />
          <ResumeBlock title="Community Engagement & Leadership" entries={RESUME.leadership} />
          <ResumeBlock title="Pre-Professional Experience" entries={RESUME.experience} />
          <ResumeBlock title="Research & Publications" entries={RESUME.research} />
          <ResumeBlock title="Summer Programs" entries={RESUME.programs} />
          <ResumeBlock title="Extracurriculars" entries={RESUME.extracurriculars} />
        </div>
      </div>

      <div className="more reveal">
        <a className="btn primary" href={RESUME_URL} download="Resume - Suveer Saigal.pdf">
          Download the PDF résumé ↓
        </a>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="contact">
      <p className="eyebrow fade-up">Contact</p>
      <h1 className="fade-up" style={{ animationDelay: '0.1s' }}>
        Let's build something that matters.
      </h1>
      <p className="body-lg fade-up" style={{ animationDelay: '0.2s' }}>
        For partnerships with Neev Ventures, research collaborations or just a conversation, I'd
        love to hear from you.
      </p>
      <div className="hero-actions center fade-up" style={{ animationDelay: '0.3s' }}>
        <a className="btn primary" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <Link className="btn ghost" to="/resume">
          View résumé
        </Link>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="contact">
      <PageHead eyebrow="404" title="This page doesn't exist." />
      <Link className="btn primary" to="/">
        Back home
      </Link>
    </div>
  )
}

/* ---------- Shell ---------- */

function Layout() {
  const { pathname } = useLocation()
  useReveal(pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <Header />
      <main key={pathname} className={pathname === '/' ? '' : 'page'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/neev-ventures" element={<NeevPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/honors" element={<HonorsPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Suveer Saigal ·{' '}
        <a href={NEEV_URL} target="_blank" rel="noreferrer">
          Neev Ventures
        </a>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
