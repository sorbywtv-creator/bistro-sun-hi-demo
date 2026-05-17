"use client";

import Image from "next/image";
import {
  ArrowRight,
  Clock,
  Facebook,
  MapPin,
  Navigation,
  Phone,
  Star,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { MenuExperience } from "@/components/MenuExperience";
import { SectionHeading } from "@/components/SectionHeading";
import { menuSectionsByLanguage } from "@/data/menu";
import {
  featuredDishesByLanguage,
  galleryImagesByLanguage,
  hoursByLanguage,
  reviewsByLanguage,
  site,
} from "@/data/site";
import { translations, type Language } from "@/data/translations";

const languageOptions: Language[] = ["de", "en"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const t = translations[language];
  const featuredDishes = featuredDishesByLanguage[language];
  const galleryImages = galleryImagesByLanguage[language];
  const reviews = reviewsByLanguage[language];
  const hours = hoursByLanguage[language];
  const menuSections = menuSectionsByLanguage[language];

  const navItems = [
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.hours, href: "#hours" },
    { label: t.nav.location, href: "#location" },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.footer.homeAria}>
          <span>Sun Hi</span>
          <small>Bistro</small>
        </a>
        <nav aria-label={language === "de" ? "Hauptnavigation" : "Primary navigation"}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-toggle" aria-label={t.nav.languageLabel}>
            {languageOptions.map((option) => (
              <button
                aria-pressed={language === option}
                key={option}
                onClick={() => setLanguage(option)}
                type="button"
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="header-call" href={site.phoneHref}>
            <Phone aria-hidden="true" size={16} />
            {t.nav.call}
          </a>
        </div>
      </header>

      <section className="hero section-band" id="top">
        <div className="hero-copy reveal">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#menu">
              {t.hero.viewMenu}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="button button-dark" href={site.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              {t.hero.callNow}
            </a>
            <a className="button button-subtle" href={site.directionsUrl}>
              <Navigation aria-hidden="true" size={18} />
              {t.hero.directions}
            </a>
          </div>
        </div>

        <div className="hero-visual reveal reveal-delay">
          <div className="hero-image hero-main">
            <Image
              src="/images/sushi.png"
              alt={t.hero.sushiAlt}
              fill
              priority
              sizes="(max-width: 768px) 92vw, 46vw"
            />
          </div>
          <div className="hero-image hero-secondary">
            <Image
              src="/images/pho-ga.png"
              alt={t.hero.phoAlt}
              fill
              sizes="(max-width: 768px) 42vw, 18vw"
            />
          </div>
          <div className="hero-note">
            <Utensils aria-hidden="true" size={18} />
            <span>{t.hero.note}</span>
          </div>
        </div>
      </section>

      <section className="section-block" id="highlights">
        <SectionHeading
          label={t.highlights.label}
          title={t.highlights.title}
          copy={t.highlights.copy}
        />
        <div className="feature-grid">
          {featuredDishes.map((dish, index) => (
            <article className="food-card reveal" key={dish.name}>
              <div className="food-image">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 92vw, 42vw"
                      : "(max-width: 768px) 92vw, 24vw"
                  }
                />
              </div>
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-section section-band" id="menu">
        <SectionHeading label={t.menu.label} title={t.menu.title} copy={t.menu.copy} />
        <MenuExperience menuSections={menuSections} labels={t.menu} />
      </section>

      <section className="section-block" id="gallery">
        <SectionHeading label={t.gallery.label} title={t.gallery.title} copy={t.gallery.copy} />
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className={`gallery-item gallery-${index + 1}`} key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="eager"
                sizes="(max-width: 768px) 92vw, 30vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="about section-band" id="about">
        <div className="about-copy">
          <p className="section-label">{t.about.label}</p>
          <h2>{t.about.title}</h2>
        </div>
        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>
      </section>

      <section className="hours-location section-block" id="hours">
        <div className="hours-card">
          <SectionHeading label={t.hours.label} title={t.hours.title} />
          <div className="hours-list">
            {hours.map((item) => (
              <div className={item.time === t.hours.closed ? "is-closed" : ""} key={item.day}>
                <span>{item.day}</span>
                <strong>{item.time}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-card">
          <p className="section-label">{t.reviews.label}</p>
          <h2>{t.reviews.title}</h2>
          <div className="review-list">
            {reviews.map((review) => (
              <article key={review.text}>
                <div aria-label={t.reviews.starsAria} className="stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star aria-hidden="true" fill="currentColor" key={index} size={15} />
                  ))}
                </div>
                <p>{review.text}</p>
                <span>{review.name}</span>
              </article>
            ))}
          </div>
          <a className="button button-subtle reviews-cta" href={site.googleReviewsUrl}>
            <Star aria-hidden="true" size={17} />
            {t.reviews.cta}
          </a>
        </div>
      </section>

      <section className="location section-band" id="location">
        <div className="location-copy">
          <p className="section-label">{t.location.label}</p>
          <h2>{t.location.title}</h2>
          <div className="contact-lines">
            <p>
              <MapPin aria-hidden="true" size={18} />
              {site.address}
            </p>
            <p>
              <Phone aria-hidden="true" size={18} />
              {t.location.phoneLabel}
            </p>
            <p>
              <Clock aria-hidden="true" size={18} />
              {t.hours.short}
            </p>
          </div>
          <a className="button button-gold" href={site.directionsUrl}>
            <Navigation aria-hidden="true" size={18} />
            {t.location.directions}
          </a>
        </div>
        <div className="map-frame">
          <iframe
            allowFullScreen
            aria-label={t.location.mapAria}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.mapEmbedUrl}
          />
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <a className="brand" href="#top" aria-label={t.footer.homeAria}>
            <span>Sun Hi</span>
            <small>Bistro</small>
          </a>
          <p>{site.address}</p>
        </div>
        <div className="footer-links">
          <a href={site.facebookUrl}>
            <Facebook aria-hidden="true" size={16} />
            {t.footer.facebook}
          </a>
          <a href="#">{t.footer.impressum}</a>
          <a href="#">{t.footer.privacy}</a>
        </div>
      </footer>
    </main>
  );
}
