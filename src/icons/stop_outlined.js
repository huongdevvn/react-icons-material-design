import React from 'react';

export default function IconStopOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 8v8H8V8h8m2-2H6v12h12V6z' />
  
    </svg>
  );
}