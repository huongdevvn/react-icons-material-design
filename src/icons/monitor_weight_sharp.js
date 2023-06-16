import React from 'react';

export default function IconMonitorWeightSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 3H3v18h18V3zm-6.8 8.2c-3.23 2.43-6.84-1.18-4.4-4.41 3.23-2.42 6.83 1.19 4.4 4.41z' />
    <path d='M10 8.5h1v1h-1zm1.5 0h1v1h-1zm1.5 0h1v1h-1z' />
  
    </svg>
  );
}