import React from 'react';

export default function IconRectangleOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 4v16h20V4H2zm18 14H4V6h16v12z' />
  
    </svg>
  );
}