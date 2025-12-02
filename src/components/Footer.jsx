import React from 'react';
import '../styles/footer.css';

function EnvelopeIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M3.5 7.5l8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function PhoneIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 2h3l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2c-8.3 0-15-6.7-15-15a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PinIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  );
}

function GitHubIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.1-3.4-1.1-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.6.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.9 1.1a9.9 9.9 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.4.1 2.7.7.8 1.1 1.7 1.1 2.8 0 3.8-2.4 4.7-4.6 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>
    </svg>
  );
}

function LinkedInIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.6 4 5.5 2.9 5.5S.8 4.6.8 3.5C.8 2.4 1.7 1.5 2.9 1.5S4.98 2.4 4.98 3.5ZM.9 8.2h4v13.5h-4V8.2Zm6.9 0h3.8v1.8h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.8 2.6 4.8 6v7.5h-4v-6.7c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5v6.8h-4V8.2Z"/>
    </svg>
  );
}

function XIcon(){
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 3h4.5l5.2 7.5L18.5 3H22l-7.6 9.9L22 21h-4.5l-5.4-7.7L9.5 21H6l7.6-10L6 3Z"/>
    </svg>
  );
}

export default function Footer(){
  return (
    <footer id='contact' className="site-footer" aria-labelledby="footer-heading">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2 id="footer-heading" className="footer-name">Sai Kumar</h2>
          <p className="footer-tag">Frontend Developer</p>
        </div>

        <div className="footer-contact">
          <h3 className="footer-sub">Contact</h3>
          <ul className="contact-list">
            <li>
              <a className="contact-link" href="mailto:you@example.com">
                <EnvelopeIcon />
                <span>you@example.com</span>
              </a>
            </li>
            <li>
              <a className="contact-link" href="tel:+910000000000">
                <PhoneIcon />
                <span>+91 00000 00000</span>
              </a>
            </li>
            <li>
              <span className="contact-link">
                <PinIcon />
                <span>Hyderabad, IN</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3 className="footer-sub">Social</h3>
          <nav className="social-links" aria-label="Social profiles">
            <a className="icon-btn" href="#" target="_blank" rel="noreferrer noopener" aria-label="GitHub"><GitHubIcon /></a>
            <a className="icon-btn" href="#" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a className="icon-btn" href="#" target="_blank" rel="noreferrer noopener" aria-label="Twitter / X"><XIcon /></a>
            <a className="icon-btn" href="mailto:you@example.com" aria-label="Email"><EnvelopeIcon /></a>
          </nav>
        </div>
      </div>

      <div className="container">
        <hr className="footer-divider" />
      </div>

      <div className="container coding-section">
        <h3 className="footer-sub">Coding Profiles</h3>
        <nav className="coding-links" aria-label="Coding Profiles">
          <a className="chip" href="#" target="_blank" rel="noreferrer noopener" aria-label="LeetCode">
            <span className="chip-icon">LC</span>
            <span className="chip-label">LeetCode</span>
          </a>
          <a className="chip" href="#" target="_blank" rel="noreferrer noopener" aria-label="HackerRank">
            <span className="chip-icon">HR</span>
            <span className="chip-label">HackerRank</span>
          </a>
          <a className="chip" href="#" target="_blank" rel="noreferrer noopener" aria-label="CodeChef">
            <span className="chip-icon">CC</span>
            <span className="chip-label">CodeChef</span>
          </a>
          <a className="chip" href="#" target="_blank" rel="noreferrer noopener" aria-label="GeeksforGeeks">
            <span className="chip-icon">GFG</span>
            <span className="chip-label">GFG</span>
          </a>
        </nav>
      </div>

      <div className="container footer-bottom">
        <small>© {new Date().getFullYear()} Sai Kumar. All rights reserved.</small>
      </div>
    </footer>
  );
}
