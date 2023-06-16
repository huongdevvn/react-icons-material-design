import React from 'react';

export default function IconDensitySmallSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 2h18v2H3zm0 18h18v2H3zm0-6h18v2H3zm0-6h18v2H3z' />
  
    </svg>
  );
}