import React from 'react';

export default function IconMan3Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 7H8v8h2v7h4v-7h2zm-4-5.249L14.248 4 12 6.248 9.75 4z' />
  
    </svg>
  );
}