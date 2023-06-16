import React from 'react';

export default function IconLooks5Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 3H3v18h18V3zm-6 6h-4v2h4v6H9v-2h4v-2H9V7h6v2z' />
  
    </svg>
  );
}