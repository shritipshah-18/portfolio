import React from 'react';
import '../assets/styles/Timeline.scss';

const brands = [
  {
    name: 'The Whitecrow Store',
    category: 'Fashion & Lifestyle',
    desc: 'Managed full social media presence — feed curation, reels, stories, and seasonal campaigns for this fashion brand.',
    tags: ['Content Creation', 'Feed Design', 'Reels', 'Campaigns'],
    color: 'sky',
    image: require('../assets/images/the_white_crow_store_logo.png'),
  },
  {
    name: 'Inventure Growth & Securities',
    category: 'Finance & Investment',
    desc: 'Built a trust-first content strategy — simplifying complex financial products into engaging social content.',
    tags: ['Copywriting', 'Strategy', 'Brand Tone', 'Analytics'],
    color: 'lavender',
    image: require('../assets/images/inventure.png'),
  },
  {
    name: 'Store My Goods',
    category: 'Storage & Logistics',
    desc: 'Launched and grew their Instagram from zero — building awareness for a new-to-digital brand.',
    tags: ['Launch Strategy', 'Growth', 'Content Calendar', 'Stories'],
    color: 'lime',
    image: require('../assets/images/StoreMyGoods.png'),
  },
];

function Timeline() {
  return (
    <section className="brands-section" id="work">

      <div className="brands-header">
        <p className="brands-eyebrow">Brand Work</p>
        <h2 className="brands-title">
          Brands I've <em>worked with</em>
        </h2>
        <p className="brands-sub">
          A glimpse into the brands I've managed, grown, and built content worlds for.
        </p>
      </div>

      <div className="brands-list">
        {brands.map((brand, i) => (
          <div className={`brand-card brand-card--${brand.color}`} key={i}>
            <div className="brand-img-wrap">
              <img src={brand.image} alt={brand.name} className="brand-img" />
              <div className={`brand-img-badge brand-img-badge--${brand.color}`}>
                {brand.category}
              </div>
            </div>
            <div className="brand-content">
              <div className="brand-num">0{i + 1}</div>
              <h3 className="brand-name">{brand.name}</h3>
              <p className="brand-desc">{brand.desc}</p>
              <div className="brand-tags">
                {brand.tags.map((tag, j) => (
                  <span key={j} className={`brand-tag brand-tag--${brand.color}`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
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