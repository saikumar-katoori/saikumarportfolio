import { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import '../styles/projects.css';

const SAMPLE = [
  {
    title: 'Human Activity Detection',
    tags: ['OpenCV', 'Python'],
    image: '',
    description: 'Built a computer vision model using OpenCV to detect posture and hand gestures with 90% accuracy.',
    github: 'https://github.com/saikumar-katoori/gesture-detection-model',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Faculty Appraisal Form System',
    tags: ['MERN Stack', 'JavaScript'],
    image: '',
    description: 'Developed a web application using MERN stack for online faculty appraisal and approval workflow.',
    github: 'https://github.com/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Fake News Detection Model',
    tags: ['Flask', 'Python', 'Machine Learning'],
    image: '',
    description: 'Created a machine learning model using Flask to classify news articles as real or fake with 92% accuracy.',
    github: 'https://github.com/',
    videoUrl: 'https://github.com/saikumar-katoori/Fake-News-Detection',
  },
  {
    title: 'AI Flashcard Generator',
    tags: ['React', 'OpenAI API'],
    image: '',
    description: 'Developed a React app that generates flashcards from user-provided text using OpenAI API.',
    github: 'https://github.com/',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    title: 'Client Service Chat App',
    tags: ['Tkinter', 'Python'],
    image: '',
    description: 'Developed a chat application for client service using Tkinter and Python.',
    github: 'https://github.com/saikumar-katoori/client-server-chat-application',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  }
];

export default function ProjectsList({ items = SAMPLE }){
  const [active, setActive] = useState(null);
  const lastTriggerRef = useRef(null);

  const open = (proj, e)=>{
    setActive(proj);
    lastTriggerRef.current = e?.currentTarget || null;
  };
  const close = ()=>{
    setActive(null);
    // return focus to the last trigger
    if(lastTriggerRef.current){
      lastTriggerRef.current.focus();
    }
  };

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading" className="hero-heading">Projects</h2>
        <div className="projects-row" role="list">
          {items.map((p, i)=> (
            <div role="listitem" key={i}>
              <ProjectCard project={p} onOpen={(proj)=> open(proj)} />
            </div>
          ))}
        </div>
      </div>
      <ProjectModal open={!!active} onClose={close} project={active} />
    </section>
  );
}
