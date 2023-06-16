import React from 'react';

export default function IconTableRowsSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z' />
  
    </svg>
  );
}