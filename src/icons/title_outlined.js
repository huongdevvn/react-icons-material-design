import React from 'react';

export default function IconTitleOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 4v3h5.5v12h3V7H19V4H5z' />
  
    </svg>
  );
}