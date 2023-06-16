import React from 'react';

export default function IconNearMeSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z' />
  
    </svg>
  );
}