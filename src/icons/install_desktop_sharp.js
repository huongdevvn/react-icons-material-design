import React from 'react';

export default function IconInstallDesktopSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 17H4V5h8V3H2v16h6v2h8v-2h6v-5h-2z' />
    <path d='m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z' />
  
    </svg>
  );
}