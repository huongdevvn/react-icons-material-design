import React from 'react';

export default function IconKeyboardDoubleArrowDownOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z' />
    <path d='m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z' />
  
    </svg>
  );
}