import React from 'react';

export default function Icon60fpsSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 8v8h-4V8h4m3-3H12v14h10V5zM10 8V5H2v14h9v-9H5V8h5zm-2 5v3H5v-3h3z' />
  
    </svg>
  );
}