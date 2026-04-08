import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import nigoraImage from './assets/Nigora.png'
import './App.css'

function App() {
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 90,
      easing: 'ease-out-cubic',
    })

    const onScroll = () => {
      const scrollValue = Math.min(window.scrollY, 800)
      document.documentElement.style.setProperty('--scroll-y', `${scrollValue}px`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page-shell">
      <div className="parallax-orb orb-1" aria-hidden="true" />
      <div className="parallax-orb orb-2" aria-hidden="true" />
      <div className="parallax-orb orb-3" aria-hidden="true" />

      <header className="topbar" data-aos="fade-down">
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
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy" data-aos="fade-right" data-aos-delay="120">
            <p className="eyebrow">Digital Brand Experience</p>
            <h1>Nigora G'ofurova</h1>
            <div className="role-pills" aria-label="Professional roles">
              <span>UX/UI Dizayner</span>
              <span>Web Dizayner</span>
            </div>
            <p className="lead">
              Men foydalanuvchi tajribasi kuchli, zamonaviy va estetik web sahifalar yarataman.
              Har bir loyiha brend xarakterini aniq ko'rsatishi va biznesga natija olib kelishi
              kerak.
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

          <div className="hero-visual" aria-label="Nigora portrait" data-aos="zoom-in-left">
            {!imageError ? (
              <img
                src={nigoraImage}
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

        <section className="section-heading" data-aos="fade-up">
          <p>Selected Works</p>
          <h2>Luxury va natija beradigan portfolio loyihalar</h2>
        </section>

        <section className="works" id="works" aria-label="Featured portfolio projects">
          <article className="work-card card-a" data-aos="flip-left" data-aos-delay="80">
            <p>Fashion Landing</p>
            <h3>Silk Route Studio</h3>
            <span>Brand identity + premium web UX</span>
          </article>
          <article className="work-card card-b" data-aos="flip-left" data-aos-delay="180">
            <p>Beauty Ecommerce</p>
            <h3>Luma Skin</h3>
            <span>Conversion-focused ecommerce design</span>
          </article>
          <article className="work-card card-c" data-aos="flip-left" data-aos-delay="280">
            <p>Personal Branding</p>
            <h3>Founder Identity Kit</h3>
            <span>Storytelling + visual positioning</span>
          </article>
        </section>

        <section className="services" id="services" data-aos="fade-up">
          <h2>Xizmatlar</h2>
          <div className="services-grid">
            <article data-aos="fade-up" data-aos-delay="80">
              <h3>UX/UI Dizayn</h3>
              <p>Research, wireframe, high-fidelity prototip va usability asosida dizayn.</p>
            </article>
            <article data-aos="fade-up" data-aos-delay="150">
              <h3>Web Dizayn</h3>
              <p>Luxury ko'rinish, tezkor sahifa, responsive va brendga mos vizual uslub.</p>
            </article>
            <article data-aos="fade-up" data-aos-delay="220">
              <h3>Brand Experience</h3>
              <p>Rang tizimi, tipografiya va emotional touchpointlar orqali brand hissi yaratish.</p>
            </article>
          </div>
        </section>

        <section className="about" id="about" data-aos="fade-up">
          <h2>Brend ruhi bor dizayn</h2>
          <p>
            Dizayn men uchun faqat chiroy emas. U biznes maqsadiga ishlashi, hissiyot berishi va
            brendni bir qarashda tanitishi kerak.
          </p>
        </section>

        <section className="timeline" data-aos="fade-up">
          <h2>Ish jarayoni</h2>
          <div className="timeline-steps">
            <div data-aos="fade-right" data-aos-delay="80">
              <strong>01</strong>
              <p>Discovery & Strategy</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="160">
              <strong>02</strong>
              <p>UX Flow & Wireframe</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="240">
              <strong>03</strong>
              <p>Visual Direction</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="320">
              <strong>04</strong>
              <p>Launch & Optimize</p>
            </div>
          </div>
        </section>

        <section className="testimonials" data-aos="fade-up">
          <h2>Mijozlar fikri</h2>
          <div className="testimonials-grid">
            <blockquote data-aos="zoom-in" data-aos-delay="100">
              “Nigora bizning brandimizga premium ko'rinish olib keldi. Natija juda kuchli.”
            </blockquote>
            <blockquote data-aos="zoom-in" data-aos-delay="180">
              “Sayt dizayni nafaqat chiroyli, balki mijoz oqimini ham oshirdi.”
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact" data-aos="fade-up">
        <p>Hamkorlik uchun</p>
        <a href="mailto:nigora.design@example.com">nigora.design@example.com</a>
      </footer>
    </div>
  )
}

export default App
