import React from 'react';

export default function IconHomeSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z' />
  
    </svg>
  );
}