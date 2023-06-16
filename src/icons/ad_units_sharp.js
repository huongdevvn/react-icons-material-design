import React from 'react';

export default function IconAdUnitsSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 1H5v22h14V1zm-2 18H7V5h10v14z' />
    <path d='M8 6h8v2H8z' />
  
    </svg>
  );
}