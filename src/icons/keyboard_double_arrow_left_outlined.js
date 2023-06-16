import React from 'react';

export default function IconKeyboardDoubleArrowLeftOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z' />
    <path d='m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z' />
  
    </svg>
  );
}