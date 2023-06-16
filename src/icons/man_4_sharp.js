import React from 'react';

export default function IconMan4Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M7.96 7 10 22h4l2.04-15z' />
    <circle cx={12} cy={4} r={2} />
  
    </svg>
  );
}