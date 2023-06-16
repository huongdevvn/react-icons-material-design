import React from 'react';

export default function IconSkipNextFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z' />
  
    </svg>
  );
}