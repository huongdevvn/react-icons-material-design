import React from 'react';

export default function IconSingleBedSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 10V5H6v5H4v7h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-7h-2zm-7 0H8V7h3v3zm5 0h-3V7h3v3z' />
  
    </svg>
  );
}