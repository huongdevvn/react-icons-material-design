import React from 'react';

export default function IconCrop32Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 6H3v12h18V6zm-2 10H5V8h14v8z' />
  
    </svg>
  );
}