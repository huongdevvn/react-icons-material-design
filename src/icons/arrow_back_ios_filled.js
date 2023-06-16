import React from 'react';

export default function IconArrowBackIosFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z' />
  
    </svg>
  );
}