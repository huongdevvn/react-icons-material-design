import React from 'react';

export default function IconArrowForwardIosSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z' />
  
    </svg>
  );
}