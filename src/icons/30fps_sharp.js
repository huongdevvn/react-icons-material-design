import React from 'react';

export default function Icon30fpsSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 5v3h6v2.5H3v3h5V16H2v3h9V5H2zm17 3v8h-4V8h4m3-3H12v14h10V5z' />
  
    </svg>
  );
}