import React from 'react';

export default function IconWorkOutlineSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14 6V4h-4v2h4zM4 8v11h16V8H4zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h6z' />
  
    </svg>
  );
}