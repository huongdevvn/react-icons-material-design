import React from 'react';

export default function IconVerticalShadesSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 19V3H4v16H2v2h20v-2h-2zm-10 0V5h4v14h-4z' />
  
    </svg>
  );
}