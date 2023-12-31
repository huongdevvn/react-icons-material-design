import React from 'react';

export default function IconDoorFrontSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 19V3H5v16H3v2h18v-2h-2zm-4-6h-2v-2h2v2z' />
  
    </svg>
  );
}