import React from 'react';

export default function IconFilterAltSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9H3z' />
  
    </svg>
  );
}