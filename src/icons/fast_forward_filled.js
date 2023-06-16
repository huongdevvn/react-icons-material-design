import React from 'react';

export default function IconFastForwardFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z' />
  
    </svg>
  );
}