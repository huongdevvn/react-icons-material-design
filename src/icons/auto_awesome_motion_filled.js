import React from 'react';

export default function IconAutoAwesomeMotionFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z' />
  
    </svg>
  );
}