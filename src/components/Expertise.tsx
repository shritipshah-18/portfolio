import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "LLMs",
    "RAG Pipelines",
    "Vector Search",
    "Hybrid Retrieval",
    "Jina Embeddings",
    "BERTopic",
    "FASTopic",
    "DeepEval",
    "Elasticsearch",
    "OpenSearch",
    "NER",
    "TF-IDF",
    "Hugging Face",
];

const labelsSecond = [
    "Python",
    "SQL",
    "GCP",
    "BigQuery",
    "Cloud Functions",
    "Cloud Scheduler",
    "PostgreSQL",
    "Docker",
    "Hadoop",
    "Redis",
    "Selenium",
    "Flask",
    "Pandas",
    "NumPy",
];

const labelsThird = [
    "LLaMA 3.3 70B",
    "Mistral",
    "RoBERTa",
    "Twitter-RoBERTa",
    "Scikit-learn",
    "Streamlit",
    "Power BI",
    "Tableau",
    "Matplotlib",
    "SenticNet",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & NLP Engineering</h3>
                    <p>I design and build production-grade LLM pipelines, RAG systems, and hybrid retrieval architectures. My work spans semantic search, embedding-based clustering, LLM evaluation frameworks, and domain-adaptive topic modelling at scale.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Data Engineering & Cloud</h3>
                    <p>I build scalable ETL pipelines and cloud-native data infrastructure on GCP. From automated ingestion to containerised deployments, I ensure data flows reliably from source to AI-ready storage.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGoogle} size="3x"/>
                    <h3>ML & Model Development</h3>
                    <p>I train, benchmark, and fine-tune ML and NLP models for real-world tasks — from structured metadata extraction to fine-grained emotion detection. I focus on measurable accuracy, model evaluation, and production-ready outputs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;