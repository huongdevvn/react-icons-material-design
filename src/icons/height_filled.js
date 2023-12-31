import React from 'react';

export default function IconHeightFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z' />
  
    </svg>
  );
}