import React from 'react';

export default function IconTvSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12z' />
  
    </svg>
  );
}