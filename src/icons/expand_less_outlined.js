import React from 'react';

export default function IconExpandLessOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z' />
  
    </svg>
  );
}