import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ngLogo from './assets/ng.png'
import chevarchiliImage from './assets/chevarchili.jpg'
import './App.css'

const content = {
  uz: {
    brandSub: 'Atelye Portfoliosi',
    nav: {
      home: 'Bosh sahifa',
      works: 'Ishlar',
      services: 'Xizmatlar',
      about: 'Haqida',
      contact: 'Aloqa',
    },
    hero: {
      eyebrow: 'Chevar & Raqamli Dizayn',
      title: "Nigora G'ofurova",
      roles: ['Chevar', 'UX/UI Dizayner', 'Web Dizayner'],
      lead: "Nafis kiyim tikaman va brendlar uchun zamonaviy, aniq natija beradigan dizayn yarataman.",
      academic: 'Sharda University Uzbekistan, B.Tech fakulteti 1-kurs talabasi',
      futureLine: "Bo'lajak business lady",
      primaryCta: 'Loyihani Boshlash',
      secondaryCta: "Portfolioni Ko'rish",
      visualTopLabel: 'Premium Atelier',
      visualBottomLabel: 'Tikuv & Design Studio',
      visualCards: [
        { value: '24h', label: 'Tez javob' },
        { value: '1:1', label: 'Shaxsiy yondashuv' },
      ],
      metrics: [
        { value: '32+', label: 'Loyihalar' },
        { value: '5 yil', label: 'Tajriba' },
        { value: '98%', label: 'Mijoz mamnunligi' },
      ],
    },
    sections: {
      selectedWorks: 'Tanlangan Ishlar',
      worksTitle: 'Nafis va natijaga ishlovchi ishlar',
      servicesTitle: 'Xizmatlar',
      aboutTitle: 'Did bilan tikuv va dizayn',
      aboutText: "Har bir ishda sifat, nafis ko'rinish va mijozga mos yechim birinchi o'rinda.",
      processTitle: 'Ish jarayoni',
      testimonialsTitle: 'Mijozlar fikri',
      contactTitle: 'Hamkorlik va buyurtma uchun',
    },
    footer: {
      rights: "All rights reserved © 2026 Go'furova Nigora",
      sub: 'Rasmiy portfolio',
    },
    works: [
      {
        type: 'Fashion Landing',
        title: 'Silk Route Studio',
        desc: 'Brend identikasi va premium web UX',
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      },
      {
        type: 'Beauty Ecommerce',
        title: 'Luma Skin',
        desc: "Konversiyaga yo'naltirilgan ecommerce dizayn",
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      },
      {
        type: 'Personal Branding',
        title: 'Founder Identity Kit',
        desc: 'Storytelling va vizual pozitsiyalash',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    services: [
      {
        title: 'Chevarlik',
        desc: "Buyurtmaga mos nafis kiyimlar: o'lchov, bichim va sifatli tikuv.",
        image: chevarchiliImage,
      },
      {
        title: 'UX/UI Dizayn',
        desc: "Foydalanuvchiga qulay, toza va maqsadga yo'naltirilgan interfeys.",
        image:
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Web Dizayn',
        desc: 'Brendga mos, tezkor va estetik web sahifa dizayni.',
        image:
          'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    processSteps: ['Tahlil va Strategiya', 'UX Flow va Wireframe', 'Vizual Yo\'nalish', 'Ishga Tushirish'],
    testimonials: [
      "Nigora bizning brandimizga premium ko'rinish olib keldi. Natija juda kuchli.",
      'Sayt dizayni nafaqat chiroyli, balki mijoz oqimini ham oshirdi.',
    ],
    aria: {
      brandHome: 'Nigora bosh sahifa',
      mainNav: 'Asosiy navigatsiya',
      professionalRoles: 'Kasbiy yo\'nalishlar',
      highlights: 'Asosiy ko\'rsatkichlar',
      portrait: 'Nigora portreti',
      featuredWorks: 'Tanlangan portfolio loyihalari',
      backToTop: 'Tepaga qaytish',
      languageSwitch: 'Tilni almashtirish',
      switchToLight: 'Yorug\' rejimga o\'tish',
      switchToDark: 'Qorong\'i rejimga o\'tish',
    },
    theme: {
      light: 'Yorug\' rejim',
      dark: 'Qorong\'i rejim',
    },
    languageButton: 'EN',
    seo: {
      title: "Go'furova Nigora | Chevar, UX/UI va Web Dizayner",
      description:
        "Go'furova Nigora (Nigora G'ofurova) portfolio: chevarlik, UX/UI va web dizayn xizmatlari. Sharda University Uzbekistan B.Tech talabasi tomonidan premium yechimlar.",
      keywords:
        "Go'furova Nigora, Gofurova Nigora, Nigora G'ofurova, Nigora Gofurova, chevar, UX UI dizayner, web dizayner, portfolio, Uzbekistan, Tashkent",
      ogTitle: "Go'furova Nigora | Chevar, UX/UI va Web Dizayner",
      ogDescription: "Go'furova Nigora portfolio: chevarlik, UX/UI va web dizayn bo'yicha premium ishlar.",
      twitterTitle: "Go'furova Nigora | Chevar, UX/UI va Web Dizayner",
      twitterDescription: "Go'furova Nigora portfolio: chevarlik, UX/UI va web dizayn bo'yicha premium ishlar.",
    },
  },
  en: {
    brandSub: 'Atelier Portfolio',
    nav: {
      home: 'Home',
      works: 'Works',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Tailor & Digital Design',
      title: "Nigora G'ofurova",
      roles: ['Tailor', 'UX/UI Designer', 'Web Designer'],
      lead: 'I craft elegant garments and create modern, conversion-focused design solutions for brands.',
      academic: 'First-year B.Tech student at Sharda University Uzbekistan',
      futureLine: 'Future business lady',
      primaryCta: 'Start a Project',
      secondaryCta: 'View Portfolio',
      visualTopLabel: 'Premium Atelier',
      visualBottomLabel: 'Tailoring & Design Studio',
      visualCards: [
        { value: '24h', label: 'Fast response' },
        { value: '1:1', label: 'Personal approach' },
      ],
      metrics: [
        { value: '32+', label: 'Projects' },
        { value: '5 years', label: 'Experience' },
        { value: '98%', label: 'Client Satisfaction' },
      ],
    },
    sections: {
      selectedWorks: 'Selected Works',
      worksTitle: 'Elegant, high-impact projects',
      servicesTitle: 'Services',
      aboutTitle: 'Tailoring with taste and design',
      aboutText: 'Quality, elegant aesthetics, and client-focused solutions come first in every project.',
      processTitle: 'Work Process',
      testimonialsTitle: 'Client Feedback',
      contactTitle: 'For collaboration and orders',
    },
    footer: {
      rights: "All rights reserved © 2026 Go'furova Nigora",
      sub: 'Official portfolio',
    },
    works: [
      {
        type: 'Fashion Landing',
        title: 'Silk Route Studio',
        desc: 'Brand identity and premium web UX',
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
      },
      {
        type: 'Beauty Ecommerce',
        title: 'Luma Skin',
        desc: 'Conversion-focused ecommerce design',
        image:
          'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      },
      {
        type: 'Personal Branding',
        title: 'Founder Identity Kit',
        desc: 'Storytelling and visual positioning',
        image:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    services: [
      {
        title: 'Tailoring',
        desc: 'Elegant custom garments: accurate measurements, refined cuts, and quality finishing.',
        image: chevarchiliImage,
      },
      {
        title: 'UX/UI Design',
        desc: 'Clean, user-focused interfaces built to support clear business goals.',
        image:
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        title: 'Web Design',
        desc: 'Fast, aesthetic, and brand-aligned website design.',
        image:
          'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    processSteps: ['Discovery & Strategy', 'UX Flow & Wireframe', 'Visual Direction', 'Launch'],
    testimonials: [
      'Nigora gave our brand a premium look. The outcome was powerful.',
      'The website is not only beautiful, it also improved customer acquisition.',
    ],
    aria: {
      brandHome: 'Nigora brand home',
      mainNav: 'Main navigation',
      professionalRoles: 'Professional roles',
      highlights: 'Highlights',
      portrait: 'Nigora portrait',
      featuredWorks: 'Featured portfolio projects',
      backToTop: 'Back to top',
      languageSwitch: 'Switch language',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
    },
    theme: {
      light: 'Light mode',
      dark: 'Dark mode',
    },
    languageButton: 'UZ',
    seo: {
      title: "Go'furova Nigora | Tailor, UX/UI & Web Designer",
      description:
        "Go'furova Nigora (Nigora G'ofurova) portfolio: tailoring, UX/UI, and web design services by a Sharda University Uzbekistan B.Tech student.",
      keywords:
        "Go'furova Nigora, Gofurova Nigora, Nigora G'ofurova, Nigora Gofurova, tailor, UX UI designer, web designer, portfolio, Uzbekistan, Tashkent",
      ogTitle: "Go'furova Nigora | Tailor, UX/UI & Web Designer",
      ogDescription: "Go'furova Nigora portfolio: tailoring, UX/UI, and web design with elegant, high-quality solutions.",
      twitterTitle: "Go'furova Nigora | Tailor, UX/UI & Web Designer",
      twitterDescription: "Go'furova Nigora portfolio: tailoring, UX/UI, and web design with elegant, high-quality solutions.",
    },
  },
}

function App() {
  const [imageError, setImageError] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('uz')
  const [isLoaded, setIsLoaded] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const t = content[language]

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const storedLanguage = localStorage.getItem('language')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark

    setIsDarkMode(shouldUseDark)
    if (storedLanguage === 'en' || storedLanguage === 'uz') {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
    document.title = t.seo.title

    const setMetaByName = (name, value) => {
      const element = document.querySelector(`meta[name="${name}"]`)
      if (element) {
        element.setAttribute('content', value)
      }
    }

    const setMetaByProperty = (property, value) => {
      const element = document.querySelector(`meta[property="${property}"]`)
      if (element) {
        element.setAttribute('content', value)
      }
    }

    setMetaByName('description', t.seo.description)
    setMetaByName('keywords', t.seo.keywords)
    setMetaByProperty('og:title', t.seo.ogTitle)
    setMetaByProperty('og:description', t.seo.ogDescription)
    setMetaByProperty('og:locale', language === 'uz' ? 'uz_UZ' : 'en_US')
    setMetaByName('twitter:title', t.seo.twitterTitle)
    setMetaByName('twitter:description', t.seo.twitterDescription)
  }, [language, t.seo])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches

    AOS.init({
      duration: 650,
      once: true,
      offset: 70,
      easing: 'ease-out-cubic',
      disable: prefersReducedMotion || isSmallScreen,
    })

    AOS.refresh()
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--scroll-y', '0px')
    document.documentElement.style.setProperty('--scroll-progress', '0')

    let ticking = false
    const onScroll = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(() => {
        const shouldShowBackToTop = window.scrollY > 140

        setShowBackToTop((prev) => (prev !== shouldShowBackToTop ? shouldShowBackToTop : prev))
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const timerId = window.setTimeout(() => setIsLoaded(true), 90)
    return () => window.clearTimeout(timerId)
  }, [])

  return (
    <>
      <div className={`page-shell ${isLoaded ? 'is-loaded' : ''}`}>
      <div className="parallax-orb orb-1" aria-hidden="true" />
      <div className="parallax-orb orb-2" aria-hidden="true" />
      <div className="parallax-orb orb-3" aria-hidden="true" />
      <div className="entry-glow glow-left" aria-hidden="true" />
      <div className="entry-glow glow-right" aria-hidden="true" />

      <header className="topbar" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
        <a className="brand" href="#home" aria-label={t.aria.brandHome}>
          <span className="brand-mark" aria-hidden="true">
            <img src={ngLogo} alt="NG logo" loading="eager" />
          </span>
          <span className="brand-text">
            <strong>NIGORA</strong>
            <small>{t.brandSub}</small>
          </span>
        </a>

        <div className="topbar-actions" data-aos="fade-left" data-aos-delay="120">
          <nav className="nav-links" aria-label={t.aria.mainNav} data-aos="fade-left" data-aos-delay="160">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
          </nav>

          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLanguage((prev) => (prev === 'uz' ? 'en' : 'uz'))}
            aria-label={t.aria.languageSwitch}
            title={t.aria.languageSwitch}
          >
            {t.languageButton}
          </button>

          <button
            type="button"
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={isDarkMode ? t.aria.switchToLight : t.aria.switchToDark}
            title={isDarkMode ? t.theme.light : t.theme.dark}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {isDarkMode ? (
                <svg viewBox="0 0 24 24" role="img">
                  <path
                    d="M15.8 15.6a7 7 0 0 1-7.4-10.9 8 8 0 1 0 10.9 10.9 6.9 6.9 0 0 1-3.5 0z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" role="img">
                  <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                  <path
                    d="M12 1.8v3M12 19.2v3M4.8 12h-3M22.2 12h-3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-sun">
                <span className="sun-core" />
              </span>
              <span className="theme-toggle-moon">
                <span className="moon-core">
                  <span className="moon-crater crater-a" />
                  <span className="moon-crater crater-b" />
                  <span className="moon-crater crater-c" />
                </span>
              </span>
            </span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="hero-copy" data-aos="fade-up" data-aos-delay="80">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <div className="role-pills" aria-label={t.aria.professionalRoles}>
              {t.hero.roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
            <p className="lead">{t.hero.lead}</p>
            <p className="academic-line">
              <span className="academic-pill">{t.hero.academic}</span>
            </p>
            <p className="future-line">{t.hero.futureLine}</p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                {t.hero.primaryCta}
              </a>
              <a className="btn btn-ghost" href="#works">
                {t.hero.secondaryCta}
              </a>
            </div>
            <ul className="metrics" aria-label={t.aria.highlights}>
              {t.hero.metrics.map((item, index) => (
                <li key={item.label} data-aos="zoom-in" data-aos-delay={120 + index * 50}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-visual-wrap" data-aos="fade-up" data-aos-delay="120">
            <div className="hero-visual" aria-label={t.aria.portrait}>
              {!imageError ? (
                <picture>
                  <source srcSet="/Nigora.avif" type="image/avif" />
                  <source srcSet="/Nigora.webp" type="image/webp" />
                  <img
                    src="/Nigora.png"
                    alt="Nigora portrait"
                    fetchPriority="high"
                    decoding="async"
                    onError={() => setImageError(true)}
                  />
                </picture>
              ) : (
                <div className="photo-fallback" aria-hidden="true">
                  NG
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-heading" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <p>{t.sections.selectedWorks}</p>
          <h2>{t.sections.worksTitle}</h2>
        </section>

        <section className="works" id="works" aria-label={t.aria.featuredWorks} data-aos="fade-up">
          {t.works.map((work, index) => (
            <article
              key={work.title}
              className={`work-card card-${String.fromCharCode(97 + index)}`}
              data-aos="zoom-in"
              data-aos-delay={80 + index * 70}
            >
              <div className="card-media" aria-hidden="true">
                <img src={work.image} alt="" loading="lazy" decoding="async" fetchPriority="low" />
              </div>
              <p>{work.type}</p>
              <h3>{work.title}</h3>
              <span>{work.desc}</span>
            </article>
          ))}
        </section>

        <section className="services" id="services" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2>{t.sections.servicesTitle}</h2>
          <div className="services-grid">
            {t.services.map((service, index) => (
              <article
                key={service.title}
                data-aos="zoom-in"
                data-aos-delay={80 + index * 70}
              >
                <div className="service-media" aria-hidden="true">
                  <img src={service.image} alt="" loading="lazy" decoding="async" fetchPriority="low" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2>{t.sections.aboutTitle}</h2>
          <p>{t.sections.aboutText}</p>
        </section>

        <section className="timeline" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2>{t.sections.processTitle}</h2>
          <div className="timeline-steps">
            {t.processSteps.map((step, index) => (
              <div key={step} data-aos="zoom-in" data-aos-delay={80 + index * 70}>
                <strong>{`0${index + 1}`}</strong>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2>{t.sections.testimonialsTitle}</h2>
          <div className="testimonials-grid">
            {t.testimonials.map((quote, index) => (
              <blockquote
                key={quote}
                data-aos="zoom-in"
                data-aos-delay={100 + index * 80}
              >
                {`“${quote}”`}
              </blockquote>
            ))}
          </div>
        </section>

        <footer className="site-footer" id="contact" data-aos="fade-up" data-aos-delay="180">
          <div className="site-footer-brand">
            <span className="site-footer-mark" aria-hidden="true">
              <img src={ngLogo} alt="NG logo" loading="lazy" decoding="async" />
            </span>
            <div className="site-footer-text">
              <strong>GO'FUROVA NIGORA</strong>
              <small>{t.footer.sub}</small>
            </div>
          </div>
          <p>{t.footer.rights}</p>
        </footer>
      </main>
      </div>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label={t.aria.backToTop}
        title={t.aria.backToTop}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </>
  )
}

export default App
