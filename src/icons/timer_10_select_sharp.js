import React from 'react';

export default function IconTimer10SelectSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M13 8v8h-3V8h3m3-3H7v14h9V5zM1 8h2v11h3V5H1v3zm22 3h-6v5h4v1h-4v2h6v-5h-4v-1h4v-2z' />
  
    </svg>
  );
}