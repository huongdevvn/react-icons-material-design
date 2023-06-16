import React from 'react';

export default function IconClassSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z' />
  
    </svg>
  );
}