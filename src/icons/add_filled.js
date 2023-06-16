import React from 'react';

export default function IconAddFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
  
    </svg>
  );
}