import React from 'react';

export default function IconIceSkatingSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 17c0 1.66-1.34 3-3 3h-2v-2h3l-.01-6-5.71-1.43A3 3 0 0 1 11.32 9H8V8h3.02L11 7H8V6h3V3H3v15h3v2H2v2h16c2.76 0 5-2.24 5-5h-2zm-7 3H8v-2h6v2z' />
  
    </svg>
  );
}