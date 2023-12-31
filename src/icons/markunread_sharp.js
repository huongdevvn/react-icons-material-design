import React from 'react';

export default function IconMarkunreadSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 4H2v16h20V4zm-2 4-8 5-8-5V6l8 5 8-5v2z' />
  
    </svg>
  );
}