import React from 'react';

export default function IconVideoChatSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 2v20l4-4h16V2H2zm15 11-2-1.99V14H7V6h8v2.99L17 7v6z' />
  
    </svg>
  );
}