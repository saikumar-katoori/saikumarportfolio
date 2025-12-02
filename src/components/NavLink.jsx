import React from 'react';

export default function NavLink({href, children, onClick}){
  return (
    <a href={href} onClick={onClick} className="nav-link" role="link">
      {children}
    </a>
  )
}
