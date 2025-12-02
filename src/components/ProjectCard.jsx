import '../styles/projects.css';

export default function ProjectCard({ project, onOpen }){
  return (
    <article className="project-card" tabIndex={0}>
      <div className="project-thumb" aria-hidden="true">
        {project.image ? <img src={project.image} alt="" loading="lazy" /> : <div className="thumb-fallback">{project.title?.[0] || 'P'}</div>}
      </div>
      <div className="project-meta">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tags">{project.tags?.join(' • ')}</p>
        <button className="btn btn-secondary" aria-haspopup="dialog" onClick={()=> onOpen(project)}>
          Know More
        </button>
      </div>
    </article>
  );
}
