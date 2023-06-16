import React from 'react';

export default function IconBoltSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28L11 21z' />
  
    </svg>
  );
}