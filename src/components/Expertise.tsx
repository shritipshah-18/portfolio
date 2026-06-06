import React from 'react';
import '../assets/styles/Expertise.scss';

const services = [
  {
    num: '01',
    icon: '📲',
    title: 'Social Media Management',
    color: 'sky',
    desc: 'Full-platform management that keeps your brand active, consistent, and growing — without you lifting a finger.',
    points: ['Content calendar planning', 'Post creation & scheduling', 'Community management', 'Monthly performance reports'],
  },
  {
    num: '02',
    icon: '🎨',
    title: 'Brand Strategy & Identity',
    color: 'lime',
    desc: 'Defining who you are online — your tone, visual language, and the story your brand tells every single day.',
    points: ['Brand voice development', 'Feed aesthetic direction', 'Competitor analysis', 'Brand guidelines doc'],
  },
  {
    num: '03',
    icon: '🚀',
    title: 'Campaign Development',
    color: 'pink',
    desc: 'Seasonal drops, launches, and topical campaigns that make people stop scrolling and start engaging.',
    points: ['Concept & ideation', 'Creative direction', 'Reel & story sequences', 'Post-campaign analytics'],
  },
  {
    num: '04',
    icon: '✍️',
    title: 'Content Creation',
    color: 'lavender',
    desc: 'Scroll-stopping visuals and captions that feel authentic to your brand — not generic filler content.',
    points: ['Copywriting & captions', 'Canva graphic design', 'Reel cover designs', 'Moodboard creation'],
  },
  {
    num: '05',
    icon: '📸',
    title: 'Brand Shoot Direction',
    color: 'sky',
    desc: 'Planning shoots that give you months of content — shot with intention, used with strategy.',
    points: ['Shot-list planning', 'Mood & prop direction', 'On-set coordination', 'Post-shoot editing brief'],
  },
  {
    num: '06',
    icon: '📊',
    title: 'Analytics & Reporting',
    color: 'lime',
    desc: 'Numbers that actually mean something — turned into clear insights and an action plan for next month.',
    points: ['Monthly analytics report', 'Audience insights', 'Content performance review', 'Growth strategy updates'],
  },
];

function Expertise() {
  return (
    <section className="expertise-section" id="services">
      <div className="exp-header">
        <p className="exp-eyebrow">What I Do</p>
        <h2 className="exp-title">
          Services built for <em>real growth</em>
        </h2>
        <p className="exp-sub">
          Pick one, or let's build a package that fits your brand exactly.
        </p>
      </div>

      <div className="exp-grid">
        {services.map((s, i) => (
          <div className={`exp-card exp-card--${s.color}`} key={i}>
            <div className="exp-card-top">
              <span className="exp-num">{s.num}</span>
              <span className="exp-icon">{s.icon}</span>
            </div>
            <h3 className="exp-card-title">{s.title}</h3>
            <p className="exp-card-desc">{s.desc}</p>
            <ul className="exp-list">
              {s.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="exp-cta-banner">
        <p className="exp-cta-text">
          Not sure what you need? Let's figure it out together.
        </p>
        <a href="#contact" className="exp-cta-btn">Get in Touch →</a>
      </div>
    </section>
  );
}

export default Expertise;