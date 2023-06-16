import React from 'react';

export default function IconHourglassTopTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m8 7.5 4 4 4-4V4H8z' opacity={0.3} />
    <path d='m8 7.5 4 4 4-4V4H8z' opacity={0.3} />
    <path d='M18 2H6v6l4 4-3.99 4.01L6 22h12l-.01-5.99L14 12l4-3.99V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9-4 4-4-4V4h8v3.5z' />
  
    </svg>
  );
}