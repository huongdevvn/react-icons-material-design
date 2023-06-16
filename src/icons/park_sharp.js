import React from 'react';

export default function IconParkSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z' />
  
    </svg>
  );
}