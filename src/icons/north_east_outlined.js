import React from 'react';

export default function IconNorthEastOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' />
  
    </svg>
  );
}