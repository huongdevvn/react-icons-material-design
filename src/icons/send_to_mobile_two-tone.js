import React from 'react';

export default function IconSendToMobileTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M7 3h10v1H7zm0 17h10v1H7z' opacity={0.3} />
    <path d='m22 12-4-4v3h-5v2h5v3l4-4zm-5 6H7V6h10v1h2V3c0-1.1-.9-2-2-2L7 1.01C5.9 1.01 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zM7 3h10v1H7V3zm10 18H7v-1h10v1z' />
  
    </svg>
  );
}