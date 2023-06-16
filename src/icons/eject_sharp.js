import React from 'react';

export default function IconEjectSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 17h14v2H5v-2zm7-12L5.33 15h13.34L12 5z' />
  
    </svg>
  );
}