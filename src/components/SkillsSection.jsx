import React, {useState} from 'react';
import SkillsSidebar from './SkillsSidebar';
import SkillCard from './SkillCard';
import '../styles/skills.css';
import '../styles/sidebar.css';
import '../styles/skillcard.css';
import useParallax from './useParallax';

const SKILLS = {
  Languages: [
    {name: 'C', logo: '/src/assets/logos/c.svg'},
    {name: 'Java', level: 'Intermediate', logo: '/src/assets/logos/java.svg'},
    {name: 'Julia', logo: '/src/assets/logos/julia.svg'},
    {name: 'Python', logo: '/src/assets/logos/python.svg'},
    {name: 'JavaScript', logo: '/src/assets/logos/javascript.svg'},
  ],
  'Frameworks & Libraries': [
    {name: 'React', logo: '/src/assets/logos/react.svg'},
    {name: 'Angular', logo: '/src/assets/logos/angular.svg'},
    {name: 'Express.js', logo: '/src/assets/logos/expressjs.svg'},
    {name: 'Node.js', logo: '/src/assets/logos/nodejs.svg'},
    {name: 'OpenCV', logo: '/src/assets/logos/opencv.svg'},
    {name: 'Scikit-Learn', logo: '/src/assets/logos/scikit-learn.svg'},
  ],
  'Databases & Backend Tools': [
    {name: 'MongoDB', logo: '/src/assets/logos/mongodb.svg'},
    {name: 'Firebase', logo: '/src/assets/logos/firebase.svg'},
    {name: 'n8n', logo: '/src/assets/logos/n8n.svg'},
    {name: 'Postman', logo: '/src/assets/logos/postman.svg'},
  ],
  'Tools & Platforms': [
    {name: 'Figma', logo: '/src/assets/logos/figma.svg'},
    {name: 'FlutterFlow', logo: '/src/assets/logos/flutterflow.svg'},
    {name: 'MS Office', logo: '/src/assets/logos/msoffice.svg'},
    {name: 'Notion', logo: '/src/assets/logos/notion.svg'},
    {name: 'Git', logo: '/src/assets/logos/git.svg'},
    {name: 'Github', logo: '/src/assets/logos/github.svg'},
  ],
};

export default function SkillsSection(){
  const categories = Object.keys(SKILLS);
  const [active, setActive] = useState(categories[0]);
  const parallaxRef = useParallax(0.06);

  return (
    <section id="skills" className="skills-section">
        <div className="container"><h2 className='hero-heading'>Skills</h2></div>
      <div className="container skills-layout" ref={parallaxRef}>
        <SkillsSidebar
          categories={categories}
          active={active}
          onSelect={setActive}
        />

        <div className="skills-content">
          <h2 className="skills-title">{active}</h2>
          <div className="skills-grid" role="list">
            {SKILLS[active].map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
