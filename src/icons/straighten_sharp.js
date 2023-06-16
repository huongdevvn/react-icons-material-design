import React from 'react';

export default function IconStraightenSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M23 6H1v12h22V6zm-2 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z' />
  
    </svg>
  );
}