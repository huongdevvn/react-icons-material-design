import React from 'react';

export default function IconAddRoadTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2zM18 4h2v9h-2zM4 4h2v16H4zm7 0h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z' />
  
    </svg>
  );
}