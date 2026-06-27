import React, { useRef, useEffect, useState } from 'react';
import '../assets/styles/Timeline.scss';

const brands = [
  {
    name: 'The Whitecrow Store',
    category: 'Fashion & Lifestyle',
    desc: 'Managed full social media presence, feed curation, reels, stories, and seasonal campaigns for this fashion brand.',
    tags: ['Content Creation', 'Feed Design', 'Reels', 'Campaigns'],
    color: 'sky',
    image: require('../assets/images/the_white_crow_store_logo.png'),
  },
  {
    name: 'Inventure Growth & Securities',
    category: 'Finance & Investment',
    desc: 'Built a trust-first content strategy, simplifying complex financial products into engaging social content.',
    tags: ['Copywriting', 'Strategy', 'Brand Tone', 'Analytics'],
    color: 'lavender',
    image: require('../assets/images/inventure.png'),
  },
  {
    name: 'Store My Goods',
    category: 'Storage & Logistics',
    desc: 'Launched and grew their Instagram from zero, building awareness for a new-to-digital brand.',
    tags: ['Launch Strategy', 'Growth', 'Content Calendar', 'Stories'],
    color: 'lime',
    image: require('../assets/images/StoreMyGoods.png'),
  },
  {
    name: 'Vittag',
    category: 'Fashion & Retail',
    desc: 'Created scroll-stopping content and managed social presence for this fashion-forward brand.',
    tags: ['Content Creation', 'Brand Strategy'],
    color: 'sky',
    image: require('../assets/images/vittag.jpg'),
  },
];

function BrandCard({ brand, index, visible }: { brand: typeof brands[0], index: number, visible: boolean }) {
  return (
    <div
      className={`story-card story-card--${brand.color} ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="story-img-wrap">
        <img src={brand.image} alt={brand.name} className="story-img" />
        <span className={`story-badge story-badge--${brand.color}`}>{brand.category}</span>
      </div>
      <div className="story-body">
        <h3 className="story-name">{brand.name}</h3>
        <p className="story-desc">{brand.desc}</p>
        <div className="story-tags">
          {brand.tags.slice(0, 2).map((tag, j) => (
            <span key={j} className={`story-tag story-tag--${brand.color}`}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const [visible, setVisible]   = useState<boolean[]>(new Array(brands.length).fill(false));
  const [activeIdx, setActiveIdx] = useState(0);
  const refs    = useRef<(HTMLDivElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observers = refs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(prev => { const n = [...prev]; n[i] = true; return n; }); },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  // track active dot on scroll (mobile only)
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const onScroll = () => {
      const centre = grid.scrollLeft + grid.clientWidth / 2;
      let closest = 0;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const mid = el.offsetLeft + el.offsetWidth / 2;
        if (Math.abs(mid - centre) < Math.abs((refs.current[closest]?.offsetLeft ?? 0) + (refs.current[closest]?.offsetWidth ?? 0) / 2 - centre))
          closest = i;
      });
      setActiveIdx(closest);
    };
    grid.addEventListener('scroll', onScroll, { passive: true });
    return () => grid.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToCard = (i: number) => {
    const el = refs.current[i];
    const grid = gridRef.current;
    if (!el || !grid) return;
    grid.scrollTo({ left: el.offsetLeft - grid.clientWidth / 2 + el.offsetWidth / 2, behavior: 'smooth' });
  };

  return (
    <section className="brands-section" id="work">
      <div className="brands-header">
        <p className="brands-eyebrow">Brand Work</p>
        <h2 className="brands-title">Measurable <em>Success</em> Stories</h2>
        <p className="brands-sub">
          A glimpse into the brands I've managed, grown, and built content worlds for.
        </p>
      </div>

      <div className="story-grid" ref={gridRef}>
        {brands.map((brand, i) => (
          <div key={i} ref={el => { refs.current[i] = el; }}>
            <BrandCard brand={brand} index={i} visible={visible[i]} />
          </div>
        ))}
      </div>

      {/* mobile dot indicators */}
      <div className="story-dots">
        {brands.map((_, i) => (
          <button
            key={i}
            className={`story-dot ${i === activeIdx ? 'active' : ''}`}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to brand ${i + 1}`}
          />
        ))}
      </div>

      <div className="brands-cta">
        <p className="brands-cta-text">
          Want to see more? Let's talk about what I can do for your brand.
        </p>
        <a href="#contact" className="brands-cta-btn">Get in Touch →</a>
      </div>
    </section>
  );
}

export default Timeline;
