import React, { useRef, useEffect, useState } from 'react';
import reelsData from '../data/reels.json';
import '../assets/styles/MyReels.scss';

// extracts the reel ID from any Instagram reel URL
function getReelId(url: string): string {
  const match = url.match(/reel\/([^/?]+)/);
  return match ? match[1] : '';
}

function MyReels() {
  const trackRef  = useRef<HTMLDivElement | null>(null);
  const animRef   = useRef<number>(0);
  const posRef    = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [activeIdx, setActiveIdx] = useState(0);

  // auto-scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.8;
    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += speed;
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

  // duplicate for seamless loop
  const doubled = [...reelsData, ...reelsData];

  return (
    <section className="mr-section" id="my-reels">
      <div className="mr-header">
        <p className="mr-eyebrow"><span className="mr-dot" />My Reels</p>
        <h2 className="mr-title">Fresh off the <em>feed</em></h2>
        <p className="mr-sub">
          Latest content I've created — updated regularly.
        </p>
      </div>

      <div
        className="mr-band"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        <div className="mr-fade mr-fade--left"  />
        <div className="mr-fade mr-fade--right" />

        <div className="mr-track" ref={trackRef}>
          {doubled.map((reel, i) => {
            const id = getReelId(reel.url);
            return (
              <div key={i} className="mr-card">
                <div className="mr-video-clip">
                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed/`}
                    title={reel.title}
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency
                    allowFullScreen
                    className="mr-iframe"
                  />
                  <div className="mr-footer-mask" />
                </div>
                <div className="mr-label-row">
                  <div className="mr-info">
                    <span className="mr-brand">{reel.title}</span>
                    <span className="mr-cat">{reel.label}</span>
                  </div>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-ig-link"
                    title="View on Instagram"
                  >↗</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MyReels;
