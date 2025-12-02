// Small hook to trap focus within a container while modal is open
// Usage: const trapRef = useFocusTrap(isOpen);
// Attach ref={trapRef} to the dialog content root
import {useEffect, useRef} from 'react';

export default function useFocusTrap(active){
  const ref = useRef(null);

  useEffect(()=>{
    if(!active) return;
    const root = ref.current;
    if(!root) return;

    const focusableSelectors = [
      'a[href]','area[href]','button:not([disabled])','input:not([disabled])',
      'select:not([disabled])','textarea:not([disabled])','iframe','object','embed',
      '[contenteditable]','[tabindex]:not([tabindex="-1"])']
      .join(',');

    const getNodes = ()=> Array.from(root.querySelectorAll(focusableSelectors));

    const handleKeyDown = (e)=>{
      if(e.key !== 'Tab') return;
      const nodes = getNodes();
      if(nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if(e.shiftKey){
        if(document.activeElement === first || !root.contains(document.activeElement)){
          last.focus();
          e.preventDefault();
        }
      }else{
        if(document.activeElement === last){
          first.focus();
          e.preventDefault();
        }
      }
    };

    root.addEventListener('keydown', handleKeyDown);
    return ()=> root.removeEventListener('keydown', handleKeyDown);
  },[active]);

  return ref;
}
