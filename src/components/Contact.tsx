import React, { useState } from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('shritipshah@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section" id="contact">

      {/* BIG HEADING */}
      <div className="contact-hero">
        <p className="contact-eyebrow">Let's Build Your Brand Online ✦</p>
        <h2 className="contact-title">
          Looking for someone to<br />
          <em>creatively manage</em><br />
          and grow your brand?
        </h2>
        <p className="contact-sub">
          Whether you're launching from scratch or need a fresh strategy,
          I'd love to hear about your brand. Let's connect.
        </p>
      </div>

      {/* LINKS ROW */}
      <div className="contact-links">

        <a
          href="https://www.instagram.com/shritishah_"
          target="_blank"
          rel="noreferrer"
          className="contact-card contact-card--sky"
        >
          <span className="contact-card-icon">📸</span>
          <div>
            <span className="contact-card-label">Instagram</span>
            <span className="contact-card-value">@shritishah_</span>
          </div>
          <span className="contact-card-arrow">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/shriti-shah-8b8666216"
          target="_blank"
          rel="noreferrer"
          className="contact-card contact-card--lavender"
        >
          <span className="contact-card-icon">💼</span>
          <div>
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">Shriti Shah</span>
          </div>
          <span className="contact-card-arrow">↗</span>
        </a>

        <button
          onClick={copyEmail}
          className="contact-card contact-card--lime"
        >
          <span className="contact-card-icon">✉️</span>
          <div>
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">shritipshah@gmail.com</span>
          </div>
          <span className="contact-card-arrow">
            {copied ? '✓ Copied!' : 'Copy'}
          </span>
        </button>

      </div>

      {/* AVAILABILITY BADGE */}
      <div className="contact-availability">
        <span className="availability-dot" />
        <span className="availability-text">
          Currently available for new clients, DM or email to get started.
        </span>
      </div>

          <div className="contact-footer">
      <span className="contact-footer-logo">Shriti Shah</span>
      <span className="contact-footer-copy">© 2025 — All rights reserved</span>
      <span className="contact-footer-credit">
        Designed & built by{' '}
        <a href="https://jamadade-harshita-github-io.vercel.app/" target="_blank" rel="noreferrer">
          Harshita J
        </a>
      </span>
    </div>

    </section>
  );
}

export default Contact;