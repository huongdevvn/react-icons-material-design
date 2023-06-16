import React from 'react';

export default function IconTurnSharpLeftSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h10v8h-2v-6H6z' />
  
    </svg>
  );
}