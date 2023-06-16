import React from 'react';

export default function IconBatteryFullSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 4h-3V2h-4v2H7v18h10V4z' />
  
    </svg>
  );
}