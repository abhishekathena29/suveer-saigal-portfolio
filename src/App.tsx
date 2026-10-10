import { useEffect, useState, type ReactNode } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  DOCUMENTARY_ID,
  EMAIL,
  FILM_AWARDS,
  GALLERY,
  HONORS,
  MUSIC_THEATRE,
  MUSIC_PHOTOS,
  MUSIC_THEATRE_CERTS,
  NAV,
  NAVJEEVAN_STATS,
  NEEV_AWARDS,
  NEEV_MILESTONES,
  NEEV_PILLARS,
  NEEV_STATS,
  NEEV_URL,
  PRESS,
  RESEARCH,
  RESEARCH_AWARDS,
  RESUME,
  RESUME_URL,
  THEATRE_PHOTOS,
  type Cert,
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

/* ---------- Shared ---------- */

function CertGrid({ items, cols = 4 }: { items: Cert[]; cols?: 3 | 4 }) {
  return (
    <div className={`cert-grid cols-${cols}`}>
      {items.map((c, i) => (
        <a
          key={c.img}
          className="cert reveal"
          href={c.href}
          target="_blank"
          rel="noreferrer"
          style={{ transitionDelay: `${(i % cols) * 0.06}s` }}
        >
          <div className="cert-img">
            <img src={c.img} alt={`${c.title} certificate`} loading="lazy" />
          </div>
          <div className="cert-body">
            <h3>{c.title}</h3>
            <p>{c.org}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

function CertFeature({ cert, eyebrow, text, cta }: { cert: Cert; eyebrow: string; text: string; cta: string }) {
  return (
    <div className="feature cert-feature reveal">
      <a className="cert-img" href={cert.href} target="_blank" rel="noreferrer">
        <img src={cert.img} alt={`${cert.title}, ${cert.org}`} loading="lazy" />
      </a>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3>{cert.title}</h3>
        <p className="tl-org">{cert.org}</p>
        <p>{text}</p>
        <a className="btn ghost" href={cert.href} target="_blank" rel="noreferrer">
          {cta} ↗
        </a>
      </div>
    </div>
  )
}

function PhotoGrid({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className={`photo-grid n${photos.length}`}>
      {photos.map((p, i) => (
        <img
          key={p.src}
          className="reveal"
          src={p.src}
          alt={p.alt}
          loading="lazy"
          style={{ transitionDelay: `${i * 0.08}s` }}
        />
      ))}
    </div>
  )
}

function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <ul className="stats reveal">
      {items.map((s) => (
        <li key={s.label}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </li>
      ))}
    </ul>
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
      <p className="hero-tagline fade-up" style={{ animationDelay: '0.4s' }}>
        Mission Driven, Socially Conscious, Builder.
      </p>
      <div className="hero-bio fade-up" style={{ animationDelay: '0.6s' }}>
        <p className="hero-hi">Hi, I’m Suveer!</p>
        <p>
          I’m a 17-year-old student at The Shri Ram School, Moulsari, who can’t quite keep business,
          policy, sociology, and economics in separate boxes. I founded{' '}
          <Link to="/neev-ventures">Neev Ventures</Link>, where I work with underserved women from
          various communities to build sustainable livelihoods through micro-enterprise development,
          financial education, and digital market access.
        </p>
        <p>
          When I’m not dabbling with studies or working, you’ll usually find me behind a camera,
          playing guitar with my band, acting in plays, travelling or obsessing over my latest hobby.
          I’m happiest when I’m curious, creating, and figuring out what comes next.
        </p>
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
          A social enterprise I founded in January 2025, helping women from some of the most
          overlooked communities build livelihoods of their own.
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
  return <Hero />
}

/* ---------- Pages ---------- */

function NeevPage() {
  return (
    <>
      <PageHead eyebrow="Founder" title="Neev Ventures" />
      <NeevIntro />

      <section className="section">
        <SectionHead eyebrow="Impact" title="Real change, in real numbers." />
        <div className="impact">
          <div className="impact-copy reveal">
            <p className="body-lg">
              Neev Ventures empowers underserved and overlooked women by helping them build
              sustainable livelihoods through entrepreneurship, financial literacy, and market access.
            </p>
            <p className="body-lg">
              From formerly incarcerated women to migrant workers and grassroots artisans, we help
              transform skills and lived experiences into scalable businesses and economic
              independence.
            </p>
            <p className="quote">Because talent is everywhere — access is not.</p>
          </div>
          <img
            className="impact-img reveal"
            src="/images/suveer-interview.jpg"
            alt="Suveer Saigal speaking about Neev Ventures in an interview"
            loading="lazy"
          />
        </div>
        <Stats items={NEEV_STATS} />
      </section>

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

      <section className="section">
        <SectionHead eyebrow="Recognition" title="Awards & recognition" />
        <CertGrid items={NEEV_AWARDS} />
      </section>
    </>
  )
}

function NavjeevanPage() {
  return (
    <>
      <PageHead
        eyebrow="With India Vision Foundation"
        title="Project Navjeevan"
        intro="‘Nav’ means new, and ‘Jeevan’ means life. Project Navjeevan supports formerly incarcerated and undertrial rural women in rebuilding their lives through self-employment."
      />

      <div className="neev-intro">
        <div className="reveal">
          <p className="body-lg">
            Reintegration is not just about finding work. It is about being seen again. Being
            trusted again. Being able to stand on their own with dignity. Navjeevan works closely
            with them to build financial understanding, create livelihoods, and restore a sense of
            independence and dignity.
          </p>
          <p className="quote">At its core, it is about second chances.</p>
        </div>
        <figure className="neev-figure reveal">
          <img src="/images/navjeevan/what.jpg" alt="Women at a Project Navjeevan session" />
        </figure>
      </div>

      <Stats items={NAVJEEVAN_STATS} />

      <div className="duo">
        <article className="card duo-card reveal">
          <img src="/images/navjeevan/problem.jpg" alt="" loading="lazy" />
          <h3>The core problem</h3>
          <p>
            For many women, release from incarceration is not the end of hardship, but the beginning
            of a different kind of struggle. They return to communities where stigma runs deep,
            trust is fragile, and opportunities are limited.
          </p>
          <p>
            Without access to guidance, financial knowledge, or support systems, many are left
            navigating reintegration alone, despite having the willingness to rebuild their lives.
          </p>
        </article>
        <article className="card duo-card reveal" style={{ transitionDelay: '0.08s' }}>
          <img src="/images/navjeevan/solution.jpg" alt="" loading="lazy" />
          <h3>Our solution</h3>
          <p>
            An individualized approach to reintegration through livelihood, starting with each
            woman’s circumstances, skills, and needs. Hands-on workshops in financial literacy and
            entrepreneurship build confidence and clarity.
          </p>
          <p>
            Women are then supported in starting their own businesses through funding, materials,
            and branding, with ongoing guidance so these efforts become stable, sustainable
            livelihoods.
          </p>
        </article>
      </div>

      <section className="section">
        <SectionHead eyebrow="Documentary" title="Rebuilding Freedom" />
        <p className="body-lg reveal doc-copy">
          Directed by Suveer, the documentary follows five women rebuilding their lives under
          Project Navjeevan, moving from incarceration to independence through entrepreneurship. It
          captures their transition from uncertainty and social stigma to confidence, ownership,
          and economic independence. India Vision Foundation adopted it as a flagship
          public-awareness campaign.
        </p>
        <div className="video reveal">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${DOCUMENTARY_ID}`}
            title="Rebuilding Freedom, a documentary by Suveer Saigal"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <SectionHead eyebrow="Film festivals" title="Awards for the documentary" />
        <CertGrid items={FILM_AWARDS} cols={3} />
      </section>
    </>
  )
}

function ExperiencePage() {
  return (
    <>
      <PageHead eyebrow="Experience" title="Work experience." />
      <ol className="timeline">
        {RESUME.experience.map((r) => (
          <li key={r.org + r.title} className="reveal">
            <div className="tl-meta">{r.period}</div>
            <div className="tl-card">
              <h3>{r.title}</h3>
              <p className="tl-org">{r.org}</p>
              <ul>
                {r.points?.map((p) => (
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
        {RESEARCH.map((r, i) => {
          const body = (
            <>
              <span className="tag">{r.tag}</span>
              <h3>{r.title}</h3>
              <p>{r.meta}</p>
              {r.url && <span className="read">Read the paper →</span>}
            </>
          )
          const style = { transitionDelay: `${i * 0.08}s` }
          return r.url ? (
            <a key={r.title} className="card reveal" href={r.url} target="_blank" rel="noreferrer" style={style}>
              {body}
            </a>
          ) : (
            <article key={r.title} className="card reveal" style={style}>
              {body}
            </article>
          )
        })}
      </div>
      {RESEARCH_AWARDS.map((c) => (
        <CertFeature
          key={c.title}
          cert={c}
          eyebrow="Recognition"
          text="Awarded for the research project “Effect of One District One Product (ODOP) on Indian Export Performance”."
          cta="View certificate"
        />
      ))}
    </>
  )
}

function HonorsPage() {
  return (
    <>
      <PageHead eyebrow="Honors & Awards" title="Recognition along the way." />
      <ul className="honors">
        {HONORS.map((h, i) => (
          <li key={h.title} className="reveal" style={{ transitionDelay: `${(i % 2) * 0.06}s` }}>
            {h.img && (
              <a className="honor-thumb" href={h.href} target="_blank" rel="noreferrer">
                <img src={h.img} alt={`${h.title} certificate`} loading="lazy" />
              </a>
            )}
            <div className="honor-text">
              <h3>{h.title}</h3>
              <p>{h.org}</p>
              {h.href && (
                <a className="read" href={h.href} target="_blank" rel="noreferrer">
                  View certificate ↗
                </a>
              )}
            </div>
            {h.year && <span className="year">{h.year}</span>}
          </li>
        ))}
      </ul>
    </>
  )
}

function MusicTheatrePage() {
  return (
    <>
      <PageHead
        eyebrow="Music & Theatre"
        title="On stage, and behind the strings."
        intro="Guitar with the band, lead roles on stage, and theatre that raises money for causes that matter."
      />
      <div className="pillars">
        {MUSIC_THEATRE.map((m, i) => (
          <div key={m.title} className="pillar reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <span className="pillar-num">{m.period}</span>
            <h3>{m.title}</h3>
            <p className="tl-org">{m.role}</p>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      <section className="section">
        <SectionHead eyebrow="Music" title="On stage with the band" />
        <PhotoGrid photos={MUSIC_PHOTOS} />
      </section>
      <section className="section">
        <SectionHead eyebrow="Theatre" title="In character" />
        <PhotoGrid photos={THEATRE_PHOTOS} />
      </section>
      <section className="section">
        <SectionHead eyebrow="Certificates" title="Grades & recognition" />
        <CertGrid items={MUSIC_THEATRE_CERTS} cols={3} />
      </section>
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
          <ResumeBlock title="Work Experience" entries={RESUME.experience} />
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
          <Route path="/project-navjeevan" element={<NavjeevanPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/honors" element={<HonorsPage />} />
          <Route path="/music-theatre" element={<MusicTheatrePage />} />
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
