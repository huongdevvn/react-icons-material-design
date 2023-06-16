import React from 'react';

export default function IconPinEndSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 12V6H4v12h10v2H2V4h20v8h-2zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83L14.66 8z' />
  
    </svg>
  );
}