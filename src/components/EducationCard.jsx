import React from 'react';
import '../styles/education-card.css';

export default function EducationCard({ title, degree, duration, scoreLabel, score, logo,t1,t2, current=false }){
  return (
    <article className={`edu-card ${current? 'current':''}`} tabIndex={0} aria-label={`${title}, ${degree}, ${duration}`}>
      <div className="edu-card-inner">
        <div className="edu-top">
          {logo ? (
            <div className="edu-logo">
              <img src={logo} alt={`${title} logo`} loading="lazy" />
            </div>
          ) : null}

          <div className="edu-meta">
            <div className="edu-title">{title}</div>
            <div className="edu-degree">{degree}</div>
          </div>

          <div className="edu-score">
            <div className="score-label">{scoreLabel}</div>
            <div className="score-value">{score}</div>
          </div>
        </div>

        <div className="divider" aria-hidden />

        <div className="edu-duration">{duration}</div>

        <div className="edu-lines">
            <ul>
                <li>{t1}</li>
                <li>{t2}</li>
            </ul>
        </div>
      </div>
    </article>
  )
}
