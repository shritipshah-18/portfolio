import React from 'react';
import '../assets/styles/Experience.scss';

const jobs = [
  {
    role: 'Account Lead',
    company: 'Spek Digital',
    period: 'May 2023 – March 2024',
    type: 'Full Time',
    color: 'sky',
    logo: require('../assets/images/spek_digital_logo.png'),
    points: [
      'Managed key brands: The Whitecrow Store, Inventure Growth & Securities, Store My Goods, Vittag',
      'Led social media strategy, brand shoots, and seasonal campaign development',
      'Handled client relationships and ensured smooth project execution',
      'Monitored campaign analytics and delivered actionable performance insights',
      'Collaborated with cross-functional teams on creative and content deliverables',
    ],
  },
  {
    role: 'Social Media Coordinator',
    company: 'Starwalkers',
    period: 'March 2023 – June 2023',
    type: 'Full Time',
    color: 'lavender',
    logo: require('../assets/images/starwalkers.jpg'),
    points: [
      'Increased customer engagement through strategic social media stories',
      'Created consistent on-brand content across platforms',
      'Collaborated with team members on creative content development',
      'Worked on digital awareness for the brand\'s new initiative on Instagram',
    ],
  },
  {
    role: 'Event & Digital Marketing Intern',
    company: 'DS Wedding & Events',
    period: 'Earlier Experience',
    type: 'Internship',
    color: 'lime',
    logo: require('../assets/images/dswedding.jpg'),
    points: [
      'Created event-related content and organised it into moodboards',
      'Supported planning, scheduling, cancellation, and inquiry management',
      'Assisted in resourcing and on-ground event coordination',
    ],
  },
];

function Experience() {
  return (
    <section className="exp-section" id="experience">

      <div className="exp-sec-header">
        <p className="exp-sec-eyebrow">Work History</p>
        <h2 className="exp-sec-title">
          Where I've <em>been</em>
        </h2>
        <p className="exp-sec-sub">
          3+ years across agencies, brands, and events and here's the journey.
        </p>
      </div>

      <div className="exp-timeline">
        {jobs.map((job, i) => (
          <div className="exp-entry" key={i}>

            {/* LEFT: timeline dot + line */}
            <div className="exp-timeline-col">
              <div className={`exp-dot exp-dot--${job.color}`} />
              {i < jobs.length - 1 && <div className="exp-line" />}
            </div>

            {/* RIGHT: card */}
            <div className={`exp-entry-card exp-entry-card--${job.color}`}>
              <div className="exp-entry-top">
                <div className="exp-logo-wrap">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="exp-logo"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="exp-entry-meta">
                  <h3 className="exp-role">{job.role}</h3>
                  <p className="exp-company">{job.company}</p>
                  <div className="exp-badges">
                    <span className={`exp-badge exp-badge--${job.color}`}>{job.period}</span>
                    <span className="exp-badge exp-badge--gray">{job.type}</span>
                  </div>
                </div>
              </div>
              <ul className="exp-points">
                {job.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* CERTS ROW */}
      <div className="exp-certs">
        <p className="exp-certs-label">Certifications</p>
        <div className="exp-certs-list">
          {[
            'Google Digital Unlocked',
            'Effective Business Communication — Swayam (IIMB)',
            'Digital Skills: Digital Marketing',
          ].map((cert, i) => (
            <div key={i} className="exp-cert-pill">
              <span className="exp-cert-icon">🎓</span>
              {cert}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Experience;