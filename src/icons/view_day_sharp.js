import React from 'react';

export default function IconViewDaySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z' />
  
    </svg>
  );
}