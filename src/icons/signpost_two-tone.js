import React from 'react';

export default function IconSignpostTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z' opacity={0.3} />
    <path d='M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z' />
  
    </svg>
  );
}