import React from 'react';

export default function IconNetworkCellFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z' />
  
    </svg>
  );
}