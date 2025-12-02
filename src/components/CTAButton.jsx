import React from 'react';

export default function CTAButton({children, variant='primary', ...rest}){
  const cls = variant === 'primary' ? 'btn get-in-touch' : 'btn cta-secondary';
  return (
    <button className={cls} {...rest}>{children}</button>
  )
}
