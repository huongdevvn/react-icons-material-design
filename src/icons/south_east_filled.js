import React from 'react';

export default function IconSouthEastFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z' />
  
    </svg>
  );
}