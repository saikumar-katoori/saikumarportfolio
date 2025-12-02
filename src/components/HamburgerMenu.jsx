import React from 'react';

export default function HamburgerMenu({open, setOpen}){
  return (
    <button className="hamburger btn" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 6h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M4 12h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    </button>
  )
}
