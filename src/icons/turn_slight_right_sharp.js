import React from 'react';

export default function IconTurnSlightRightSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z' />
  
    </svg>
  );
}