import React from 'react';

export default function IconRoundaboutLeftFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M10.08 8A6 6 0 0 1 16 3c3.31 0 6 2.69 6 6 0 2.97-2.16 5.44-5 5.92V21h-2v-6.09c0-.98.71-1.8 1.67-1.97a3.999 3.999 0 1 0-4.61-4.61c-.17.96-.99 1.67-1.97 1.67H5.83l1.59 1.59L6 13 2 9l4-4 1.41 1.41L5.83 8h4.25z' />
  
    </svg>
  );
}