import React from 'react';

export default function IconMan2Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 7H8v8h2.5v7h3v-7H16z' />
    <circle cx={12} cy={4} r={2} />
  
    </svg>
  );
}