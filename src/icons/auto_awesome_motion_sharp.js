import React from 'react';

export default function IconAutoAwesomeMotionSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14 2H2v12h2V4h10V2zm4 4H6v12h2V8h10V6zm4 4H10v12h12V10z' />
  
    </svg>
  );
}