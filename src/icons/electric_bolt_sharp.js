import React from 'react';

export default function IconElectricBoltSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z' />
  
    </svg>
  );
}