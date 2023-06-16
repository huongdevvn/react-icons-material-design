import React from 'react';

export default function IconKeyboardOptionKeyOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z' />
  
    </svg>
  );
}