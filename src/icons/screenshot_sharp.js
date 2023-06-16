import React from 'react';

export default function IconScreenshotSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 1v22h14V1H5zm12 17H7V6h10v12zM9.5 8.5H12V7H8v4h1.5V8.5zM12 17h4v-4h-1.5v2.5H12V17z' />
  
    </svg>
  );
}