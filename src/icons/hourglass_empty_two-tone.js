import React from 'react';

export default function IconHourglassEmptyTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z' />
  
    </svg>
  );
}