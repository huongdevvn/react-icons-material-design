import React from 'react';

export default function IconPhpSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M13 9h1.5v6H13v-2.5h-2V15H9.5V9H11v2h2V9zM8 9v4H4.5v2H3V9h5zm-1.5 1.5h-2v1h2v-1zm15-1.5v4H18v2h-1.5V9h5zM20 10.5h-2v1h2v-1z' />
  
    </svg>
  );
}