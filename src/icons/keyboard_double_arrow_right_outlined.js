import React from 'react';

export default function IconKeyboardDoubleArrowRightOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z' />
    <path d='m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z' />
  
    </svg>
  );
}