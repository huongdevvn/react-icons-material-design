import React from 'react';

export default function IconOpenInFullSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z' />
  
    </svg>
  );
}