import React from 'react';

export default function IconWoman2Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M13.41 7h-2.82L7 16h3.5v6h3v-6H17z' />
    <circle cx={12} cy={4} r={2} />
  
    </svg>
  );
}