import React from 'react';

export default function IconFilterNoneSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 5H1v18h18v-2H3V5zm20-4H5v18h18V1zm-2 16H7V3h14v14z' />
  
    </svg>
  );
}