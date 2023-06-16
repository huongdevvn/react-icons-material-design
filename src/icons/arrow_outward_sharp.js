import React from 'react';

export default function IconArrowOutwardSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z' />
  
    </svg>
  );
}