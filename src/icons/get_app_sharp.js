import React from 'react';

export default function IconGetAppSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' />
  
    </svg>
  );
}