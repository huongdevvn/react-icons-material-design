import React from 'react';

export default function IconAllOutTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <circle cx={12} cy={12} r={5} opacity={0.3} />
    <path d='M4 4v4l4-4zm12 0 4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z' />
  
    </svg>
  );
}