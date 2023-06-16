import React from 'react';

export default function IconExpandMoreTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
  
    </svg>
  );
}