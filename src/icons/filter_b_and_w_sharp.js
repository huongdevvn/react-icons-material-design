import React from 'react';

export default function IconFilterBAndWSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 3H3v18h18V3zm-2 16-7-8v8H5l7-8V5h7v14z' />
  
    </svg>
  );
}