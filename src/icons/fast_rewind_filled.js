import React from 'react';

export default function IconFastRewindFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z' />
  
    </svg>
  );
}