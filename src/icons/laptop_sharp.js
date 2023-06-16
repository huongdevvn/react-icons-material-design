import React from 'react';

export default function IconLaptopSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m20 18 2-2V4H2v12l2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' />
  
    </svg>
  );
}