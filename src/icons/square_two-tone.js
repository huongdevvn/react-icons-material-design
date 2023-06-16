import React from 'react';

export default function IconSquareTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 5h14v14H5z' opacity={0.3} />
    <path d='M3 3v18h18V3H3zm16 16H5V5h14v14z' />
  
    </svg>
  );
}