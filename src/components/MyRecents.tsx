import React, { useState } from 'react';
import recentsData from '../data/recents.json';
import '../assets/styles/MyRecents.scss';

function getReelId(url: string): string {
  const match = url.match(/reel\/([^/?]+)/);
  return match ? match[1] : '';
}

function MyRecents() {
  const [current, setCurrent] = useState(0);
  const total = recentsData.length;

  const prev = () => setCurrent(i => (i - 1 + total) % total);
  const next = () => setCurrent(i => (i + 1) % total);

  const reel = recentsData[current];
  const id   = getReelId(reel.url);

  return (
    <section className="rec-section" id="recents">
      <div className="rec-header">
        <p className="rec-eyebrow"><span className="rec-dot" />My Recents</p>
        <h2 className="rec-title">Fresh from <em>the grid</em></h2>
        <p className="rec-sub">Swipe through my most recent work.</p>
      </div>

      <div className="rec-stage">
        {/* prev arrow */}
        <button
          className="rec-arrow rec-arrow--left"
          onClick={prev}
          disabled={total <= 1}
          aria-label="Previous"
        >‹</button>

        {/* spotlight card */}
        <div className="rec-card" key={current}>
          <div className="rec-video-clip">
            <iframe
              src={`https://www.instagram.com/reel/${id}/embed/`}
              title={reel.title}
              frameBorder="0"
              scrolling="no"
              allowTransparency
              allowFullScreen
              className="rec-iframe"
            />
            <div className="rec-footer-mask" />
          </div>
          <div className="rec-meta">
            <span className="rec-title-label">{reel.title}</span>
            <span className="rec-cat">{reel.label}</span>
            <a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rec-ig-btn"
            >
              View on Instagram ↗
            </a>
          </div>
        </div>

        {/* next arrow */}
        <button
          className="rec-arrow rec-arrow--right"
          onClick={next}
          disabled={total <= 1}
          aria-label="Next"
        >›</button>
      </div>

      {/* dots */}
      {total > 1 && (
        <div className="rec-dots">
          {recentsData.map((_, i) => (
            <button
              key={i}
              className={`rec-dot-btn ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Reel ${i + 1}`}
            />
          ))}
        </div>
      )}

      <p className="rec-counter">{String(current + 1).padStart(2,'0')} / {String(total).padStart(2,'0')}</p>
    </section>
  );
}

export default MyRecents;
