import React from 'react';

export default function IconSpaceBarFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 9v4H6V9H4v6h16V9z' />
  
    </svg>
  );
}