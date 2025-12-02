import React from 'react';

function initials(name){
  const parts = name.split(/\s+/).filter(Boolean);
  if(parts.length === 1) return parts[0].slice(0,2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function SkillCard({skill}){
  const {name, logo, level} = skill;
  return (
    <article className="skill-card" role="listitem" tabIndex={0} aria-label={name}>
      <div className="skill-media">
        {logo ? (
          <img src={logo} alt={`${name} logo`} loading="lazy" />
        ) : (
          <div className="skill-fallback" aria-hidden>{initials(name)}</div>
        )}
      </div>
      <div className="skill-body">
        <div className="skill-name">{name}</div>
        {level && <div className="skill-level">{level}</div>}
      </div>
    </article>
  )
}
