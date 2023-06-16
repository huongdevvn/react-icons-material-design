import React from 'react';

export default function IconSmartDisplaySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z' />
  
    </svg>
  );
}