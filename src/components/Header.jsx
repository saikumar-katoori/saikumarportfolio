import React, {useEffect, useState} from 'react';
import '../styles/header.css';
import NavLink from './NavLink';
import HamburgerMenu from './HamburgerMenu';
import CTAButton from './CTAButton';

export default function Header(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return ()=>window.removeEventListener('scroll', onScroll);
  },[])

  return (
    <header className={`site-header ${scrolled? 'scrolled':''}`}> 
      <div className="container bar" role="banner">
        <a href="#top" className="logo-link">Sai Kumar’s Portfolio</a>
        <nav className="nav" role="navigation" aria-label="Primary">
          <NavLink href="#">About Me</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <a href="#contact"><CTAButton>Get in Touch</CTAButton></a>
        </nav>

        <HamburgerMenu open={open} setOpen={setOpen} />
        {open && (
          <div className="mobile-menu" role="menu" aria-label="Mobile navigation">
            <a href="#" onClick={()=>setOpen(false)}>About Me</a>
            <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
            <a href="#education" onClick={()=>setOpen(false)}>Education</a>
            <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#contact" onClick={()=>setOpen(false)} className="get-in-touch">Get in Touch</a>
          </div>
        )}
      </div>
    </header>
  )
}
