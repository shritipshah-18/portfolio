import React, { useState } from 'react';
import '../assets/styles/Main.scss';

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-container">

      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo">Shriti Shah</span>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#case-studies">Reels</a>
          <a href="#contact">Contact</a>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about"         onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience"    onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#services"      onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work"          onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#case-studies"  onClick={() => setMenuOpen(false)}>Reels</a>
          <a href="#contact"       onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">Social Media &amp; Brand Strategist</p>
          <h1 className="hero-title">
            Building brands<br />
            that <em>feel</em> like<br />
            something.
          </h1>
          <p className="hero-sub">
            I help small brands find their voice online — turning ideas into
            content that connects, converts, and creates community.
          </p>
          <div className="hero-ctas">
            <a href="#work" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-ghost">Let's Talk</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Exp.</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">10+</span>
              <span className="stat-label">Brands</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">∞</span>
              <span className="stat-label">Ideas</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-frame">
            <img
              src={require('../assets/images/shriti.jpeg')}
              alt="Shriti Shah"
              className="hero-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="hero-img-fallback">S</div>
            <div className="hero-tag">
              <strong>@shritishah_</strong>
              <span>Instagram</span>
            </div>
          </div>
          <div className="hero-bg-block" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[
            'Social Media Strategy', 'Content Creation', 'Brand Management',
            'Copywriting', 'Campaign Development', 'Analytics & Reporting',
            'Client Servicing', 'Feed Curation', 'Brand Shoots',
            'Social Media Strategy', 'Content Creation', 'Brand Management',
            'Copywriting', 'Campaign Development', 'Analytics & Reporting',
            'Client Servicing', 'Feed Curation', 'Brand Shoots',
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-dot">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Main;