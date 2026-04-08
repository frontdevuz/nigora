import { useState } from 'react'
import './App.css'

function App() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Nigora brand home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 120 120" role="img" aria-label="Nigora monogram">
              <defs>
                <linearGradient id="nigoraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f766e" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#be123c" />
                </linearGradient>
              </defs>
              <rect x="8" y="8" width="104" height="104" rx="28" fill="url(#nigoraGradient)" />
              <path
                d="M34 83V37h12l26 30V37h14v46H74L48 53v30H34z"
                fill="#fff8ec"
              />
              <circle cx="90" cy="90" r="8" fill="#fff8ec" opacity="0.9" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>NIGORA</strong>
            <small>Atelier Portfolio</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Digital Brand Experience</p>
            <h1>Nigora G'ofurova</h1>
            <p className="lead">
              Men zamonaviy, noodatiy va esda qoladigan web sahifalar yarataman. Har bir
              loyiha brendning xarakterini ko'rsatishi kerak.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Loyihani Boshlash
              </a>
              <a className="btn btn-ghost" href="#works">
                Portfolioni Ko'rish
              </a>
            </div>
            <ul className="metrics" aria-label="Highlights">
              <li>
                <strong>32+</strong>
                <span>Loyihalar</span>
              </li>
              <li>
                <strong>5 yil</strong>
                <span>Tajriba</span>
              </li>
              <li>
                <strong>98%</strong>
                <span>Mijoz mamnunligi</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Nigora portrait">
            {!imageError ? (
              <img
                src="/nigora-portrait.jpg"
                alt="Nigora portrait"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="photo-fallback" aria-hidden="true">
                NG
              </div>
            )}
          </div>
        </section>

        <section className="works" id="works" aria-label="Featured portfolio projects">
          <article className="work-card card-a">
            <p>Fashion Landing</p>
            <h3>Silk Route Studio</h3>
          </article>
          <article className="work-card card-b">
            <p>Beauty Ecommerce</p>
            <h3>Luma Skin</h3>
          </article>
          <article className="work-card card-c">
            <p>Personal Branding</p>
            <h3>Founder Identity Kit</h3>
          </article>
        </section>

        <section className="about" id="about">
          <h2>Brend ruhi bor dizayn</h2>
          <p>
            Dizayn men uchun faqat chiroy emas. U biznes maqsadiga ishlashi, hissiyot berishi va
            brendni bir qarashda tanitishi kerak.
          </p>
        </section>
      </main>

      <footer className="contact" id="contact">
        <p>Hamkorlik uchun</p>
        <a href="mailto:nigora.design@example.com">nigora.design@example.com</a>
      </footer>
    </div>
  )
}

export default App
