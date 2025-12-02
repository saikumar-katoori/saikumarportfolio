import { useEffect } from 'react';
import useFocusTrap from './useFocusTrap';
import VideoEmbed from './VideoEmbed';
import '../styles/modal.css';

export default function ProjectModal({ open, onClose, project }){
  const trapRef = useFocusTrap(open);

  useEffect(()=>{
    if(!open) return;
    const onKey = (e)=>{
      if(e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return ()=> document.removeEventListener('keydown', onKey);
  },[open, onClose]);

  if(!open) return null;

  const videoSrc = project?.videoUrl
    ? `${project.videoUrl}${project.videoUrl.includes('?') ? '&' : '?'}autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(e)=>{ if(e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content" ref={trapRef} onMouseDown={(e)=> e.stopPropagation()}>
        <button className="modal-close" aria-label="Close dialog" onClick={onClose}>✕</button>
        <div className="modal-grid">
          <div className="modal-media">
            {videoSrc ? (
              <VideoEmbed src={videoSrc} title={project.title} />
            ) : (
              <div className="video-fallback">No video available</div>
            )}
          </div>
          <div className="modal-body">
            <h3 id="project-modal-title" className="modal-title">{project.title}</h3>
            <p className="modal-desc">{project.description}</p>
            <div className="modal-actions">
              {project.github && (
                <a className="btn" href={project.github} target="_blank" rel="noreferrer noopener">View on GitHub</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
