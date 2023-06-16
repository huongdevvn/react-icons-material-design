import React from 'react';

export default function IconPausePresentationSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M1 3v18h22V3H1zm20 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z' />
  
    </svg>
  );
}