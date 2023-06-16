import React from 'react';

export default function IconHexagonFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z' />
  
    </svg>
  );
}