import React from 'react';

export default function IconDataArrayFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z' />
  
    </svg>
  );
}