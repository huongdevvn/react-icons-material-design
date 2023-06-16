import React from 'react';

export default function IconAtmSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M8 9v1.5h2.25V15h1.5v-4.5H14V9H8zM7 9H2v6h1.5v-1.5h2V15H7V9zm-1.5 3h-2v-1.5h2V12zM22 9h-6.5v6H17v-4.5h1V14h1.5v-3.51h1V15H22V9z' />
  
    </svg>
  );
}