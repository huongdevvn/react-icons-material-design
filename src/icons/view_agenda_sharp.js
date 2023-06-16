import React from 'react';

export default function IconViewAgendaSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 13h18v8H3zM3 3h18v8H3z' />
  
    </svg>
  );
}