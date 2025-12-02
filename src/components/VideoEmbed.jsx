import { useEffect, useRef, useState } from 'react';

export default function VideoEmbed({ src, title }){
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef(null);

  useEffect(()=>{
    const el = iframeRef.current;
    if(!el) return;
    const onLoad = ()=> setLoaded(true);
    el.addEventListener('load', onLoad);
    return ()=> el.removeEventListener('load', onLoad);
  },[]);

  return (
    <div className="video-embed">
      {!loaded && <div className="video-skeleton" aria-hidden="true" />}
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
