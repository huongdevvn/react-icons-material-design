import React from 'react';

export default function IconFilter4Sharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 5H1v18h18v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm8-14H5v18h18V1zm-2 16H7V3h14v14z' />
  
    </svg>
  );
}