import React from 'react';

export default function IconCrop75Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 5H3v14h18V5zm-2 12H5V7h14v10z' />
  
    </svg>
  );
}