import React from 'react';

export default function IconLooksTwoSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 3H3v18h18V3zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6v6z' />
  
    </svg>
  );
}