import React from 'react';

export default function IconSkipPreviousTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 14.14V9.86L12.97 12z' opacity={0.3} />
    <path d='M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z' />
  
    </svg>
  );
}