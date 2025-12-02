import React, { useEffect } from 'react';
import '../styles/mouse-glow.css';

export default function MouseGlow(){
  useEffect(()=>{
    const onMove = (e)=>{
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };
    window.addEventListener('pointermove', onMove);
    return ()=> window.removeEventListener('pointermove', onMove);
  },[]);

  return <div className="mouse-glow" aria-hidden="true" />;
}
