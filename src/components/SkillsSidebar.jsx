import React from 'react';
export default function SkillsSidebar({categories, active, onSelect}){
  return (
    <nav className="skills-sidebar" aria-label="Skills categories">
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              className={"sidebar-link"}
              onClick={() => onSelect(cat)}
              onKeyDown={(e)=>{ if(e.key === 'Enter' || e.key === ' ') onSelect(cat) }}
              aria-current={active === cat ? 'true' : undefined}
              tabIndex={0}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

