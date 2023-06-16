import React from 'react';

export default function IconSmartphoneSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 1v22h14V1H5zm12 18H7V5h10v14z' />
  
    </svg>
  );
}