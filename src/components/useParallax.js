import { useEffect, useRef } from 'react';

export default function useParallax(speed = 0.1){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const onScroll = ()=>{
      const y = window.scrollY;
      el.style.transform = `translateY(${Math.round(y * speed)}px)`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return ()=> window.removeEventListener('scroll', onScroll);
  },[speed]);
  return ref;
}
