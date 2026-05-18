import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

import mahleLogo from '../assets/images/mahle.png';
import dlrLogo from '../assets/images/dlr.jpg';
import fernLogo from '../assets/images/fernuni.jpg';
import kleLogo from '../assets/images/kle.png';
import srhLogo from '../assets/images/srh.png';

const logoStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'contain',
  padding: '6px',
  background: 'white',
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Sep 2025 – Feb 2026"
            iconStyle={{ background: 'white', boxShadow: '0 0 0 4px #5000ca' }}
            icon={<img src={mahleLogo} alt="MAHLE" style={logoStyle} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">MAHLE — Stuttgart, Germany</h4>
            <p>Hybrid AI Search, LLM Pipelines, Vector Search, Elasticsearch, DeepEval, Docker, PostgreSQL</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Jun 2025 – Sep 2025"
            iconStyle={{ background: 'white', boxShadow: '0 0 0 4px #5000ca' }}
            icon={<img src={dlrLogo} alt="DLR" style={logoStyle} />}
          >
            <h3 className="vertical-timeline-element-title">AI/NLP Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">DLR — Jena, Germany</h4>
            <p>RAG Pipeline, Topic Modelling, BERTopic, Jina Embeddings, OpenSearch, LLM-assisted Labelling</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Nov 2024 – Mar 2025"
            iconStyle={{ background: 'white', boxShadow: '0 0 0 4px #5000ca' }}
            icon={<img src={fernLogo} alt="FernUniversität" style={logoStyle} />}
          >
            <h3 className="vertical-timeline-element-title">NLP Research Collaborator</h3>
            <h4 className="vertical-timeline-element-subtitle">FernUniversität in Hagen — Germany</h4>
            <p>LLM Benchmarking, Structured Metadata Extraction, LLaMA 3.3 70B, TF-IDF Chunking</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Aug 2022 – Sep 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Varcons Technology — India</h4>
            <p>Sentiment Analysis, NLP, Tweepy, NLTK, Naive Bayes, Random Forest</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Apr 2024 – Apr 2026"
            iconStyle={{ background: 'white', boxShadow: '0 0 0 4px #e91e63' }}
            icon={<img src={srhLogo} alt="SRH Hochschule" style={logoStyle} />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. Applied Data Science & Analytics</h3>
            <h4 className="vertical-timeline-element-subtitle">SRH Hochschule — Heidelberg, Germany</h4>
            <p>GPA 1.9 · Thesis: Fine-Grained Emotion Detection </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2019 – 2023"
            iconStyle={{ background: 'white', boxShadow: '0 0 0 4px #e91e63' }}
            icon={<img src={kleLogo} alt="KLE College" style={logoStyle} />}
          >
            <h3 className="vertical-timeline-element-title">B.E. Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">KLE Dr. M.S. Sheshgiri College,India</h4>
            <p>GPA 8.02/10</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;