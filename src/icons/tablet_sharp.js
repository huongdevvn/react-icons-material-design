import React from 'react';

export default function IconTabletSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M23 4H1v16h21.99L23 4zm-4 14H5V6h14v12z' />
  
    </svg>
  );
}