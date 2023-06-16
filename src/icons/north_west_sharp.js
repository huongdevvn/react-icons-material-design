import React from 'react';

export default function IconNorthWestSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z' />
  
    </svg>
  );
}