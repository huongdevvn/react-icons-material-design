import React from 'react';

export default function IconArrowForwardFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' />
  
    </svg>
  );
}