import React from 'react';

export default function IconLooks6Round({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6h-3v2h2c1.1 0 2 .9 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h3c.55 0 1 .45 1 1s-.45 1-1 1z' />
  
    </svg>
  );
}