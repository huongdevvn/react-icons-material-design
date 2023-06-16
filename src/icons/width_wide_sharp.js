import React from 'react';

export default function IconWidthWideSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 4H2v16h20V4zM4 6h2v12H4V6zm16 12h-2V6h2v12z' />
  
    </svg>
  );
}