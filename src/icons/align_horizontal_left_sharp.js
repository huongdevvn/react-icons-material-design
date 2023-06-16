import React from 'react';

export default function IconAlignHorizontalLeftSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z' />
  
    </svg>
  );
}