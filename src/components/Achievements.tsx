import React from 'react';
import '../assets/styles/Achievements.scss';

const achievements = [
  {
    emoji: '📱',
    title: 'Social Media Growth',
    metric: '200%+',
    desc: 'Grew brand accounts across Instagram through consistent content strategy, reels, and community engagement.',
  },
  {
    emoji: '🎯',
    title: 'Campaign Performance',
    metric: '10+ Campaigns',
    desc: 'Led topical and seasonal campaigns end-to-end from concept to creative execution and post-analysis.',
  },
  {
    emoji: '🏪',
    title: 'Brands Managed',
    metric: '10+ Brands',
    desc: 'Managed accounts including The Whitecrow Store, Inventure Growth & Securities, Store My Goods, and Vittag.',
  },
  {
    emoji: '🎬',
    title: 'Content Created',
    metric: '500+ Posts',
    desc: 'Created reels, stories, carousels, and static posts with a consistent brand tone and aesthetic.',
  },
  {
    emoji: '🤝',
    title: 'Client Retention',
    metric: '100%',
    desc: 'Maintained strong client relationships through clear communication, reporting, and proactive strategy.',
  },
];

function Achievements() {
  return (
    <section className="achievements-section" id="about">

      <div className="ach-header">
        <p className="ach-eyebrow">About Me</p>
        <h2 className="ach-title">
          yes, <em>and?</em>
        </h2>
        <p className="ach-subtitle">
          Okay but seriously, here's why you should work with me.
        </p>
      </div>

      {/* INTRO SPLIT — Image 1 style */}
      <div className="ach-intro-grid">
        <div className="ach-intro-left">
          <p>
            Hi, I'm <strong>Shriti Shah</strong>, a social media strategist
            and brand storyteller based in India. I have a BBA from KLE's
            Lingaraj College and 3+ years of hands-on experience turning
            small brands into scroll-stopping presences.
          </p>
          <p>
            I've worked across hospitality, finance, fashion, and storage
            brands, which means I know how to adapt tone, aesthetic, and
            strategy to completely different audiences.
          </p>
          <p>
            At <strong>Spek Digital</strong> I was Account Lead managing
            multiple brands simultaneously. Before that, Social Media
            Coordinator at Starwalkers and intern at DS Wedding & Events.
          </p>
          <div className="ach-tags">
            {['Instagram', 'Reels & Stories', 'Canva', 'Copywriting',
              'Brand Shoots', 'Content Calendar', 'Analytics', 'Client Servicing'
            ].map(tag => (
              <span key={tag} className="ach-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="ach-intro-right">
          <div className="ach-quote-box">
            <span className="ach-quote-mark">"</span>
            <p className="ach-quote-text">
              I don't just fill up a content calendar  I build a brand world.
            </p>
            <p className="ach-quote-name">— Shriti Shah</p>
          </div>
        </div>
      </div>

      {/* ACHIEVEMENTS TIMELINE — Image 2 style */}
      <div className="ach-timeline-wrap">
        <p className="ach-timeline-label">Highlights</p>
        <div className="ach-timeline">
          {achievements.map((item, i) => (
            <div className="ach-item" key={i}>
              <div className="ach-circle">
                <span className="ach-emoji">{item.emoji}</span>
              </div>
              <div className="ach-connector" />
              <div className="ach-item-content">
                <span className="ach-metric">{item.metric}</span>
                <h3 className="ach-item-title">{item.title}</h3>
                <p className="ach-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Achievements;