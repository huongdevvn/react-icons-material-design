import React from 'react';

export default function IconEggAltFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 9c-2-2-3.01-7-9.03-7C4.95 2 1.94 6 2 11.52 2.06 17.04 6.96 19 9.97 19c2.01 0 2.01 3 6.02 3C19 22 22 19 22 15.02 22 12 21.01 11 19 9zm-7 6.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z' />
  
    </svg>
  );
}