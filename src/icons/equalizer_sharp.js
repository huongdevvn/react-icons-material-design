import React from 'react';

export default function IconEqualizerSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z' />
  
    </svg>
  );
}