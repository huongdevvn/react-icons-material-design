import React from 'react';

export default function IconTurnSlightLeftSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z' />
  
    </svg>
  );
}