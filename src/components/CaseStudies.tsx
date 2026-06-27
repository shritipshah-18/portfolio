import React, { useRef, useEffect, useState } from 'react';
import '../assets/styles/CaseStudies.scss';
import reelsData from '../data/reels.json';

function getReelId(url: string): string {
  const match = url.match(/reel\/([^/?]+)/);
  return match ? match[1] : '';
}

const reels = reelsData.map((r, i) => ({
  id:    getReelId(r.url),
  num:   String(i + 1).padStart(2, '0'),
  brand: r.title,
  label: r.label,
}));

function ReelCard({ reel }: { reel: typeof reels[0] }) {
  return (
    <div className="cs-card">
      <div className="cs-video-clip">
        <iframe
          src={`https://www.instagram.com/reel/${reel.id}/embed/`}
          title={reel.brand}
          frameBorder="0"
          scrolling="no"
          allowTransparency
          allowFullScreen
          className="cs-iframe"
        />
      </div>
      <div className="cs-label-row">
        <span className="cs-num">{reel.num}</span>
        <div className="cs-info">
          <span className="cs-brand">{reel.brand}</span>
          <span className="cs-cat">{reel.label}</span>
        </div>
        <a
          href={`https://www.instagram.com/reel/${reel.id}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-ig-link"
          title="View on Instagram"
        >↗</a>
      </div>
    </div>
  );
}

function CaseStudies() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animRef  = useRef<number>(0);
  const posRef   = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.8; // px per frame

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
        // seamless loop: when we've scrolled half (one set of cards), reset to 0
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause  = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  // duplicate cards for seamless loop
  const doubled = [...reels, ...reels];

  return (
    <section className="cs-section" id="case-studies">
      <div className="cs-header">
        <p className="cs-eyebrow"><span className="cs-dot" />Reels</p>
        <h2 className="cs-title">Proven frameworks<br /><em>that scaled viral brands</em></h2>
        <p className="cs-sub">
          A glimpse into the brands I've managed, grown, and created content for at Spek.
        </p>
      </div>

      <div
        className="cs-band"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div className="cs-fade cs-fade--left"  />
        <div className="cs-fade cs-fade--right" />

        <div className="cs-track" ref={trackRef}>
          {doubled.map((reel, i) => (
            <ReelCard key={i} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
