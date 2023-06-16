import React from 'react';

export default function IconChevronRightFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
  
    </svg>
  );
}