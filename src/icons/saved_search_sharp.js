import React from 'react';

export default function IconSavedSearchSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14.73 13.31A6.388 6.388 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21 21 19.59l-6.27-6.28zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
    <path d='M10.29 8.44 9.5 6l-.79 2.44H6.25l2.01 1.59-.77 2.47 2.01-1.53 2.01 1.53-.77-2.47 2.01-1.59z' />
  
    </svg>
  );
}