import React from 'react';

export default function IconFunctionsSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z' />
  
    </svg>
  );
}