import React from 'react';

export default function IconStopTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M8 8h8v8H8z' opacity={0.3} />
    <path d='M6 18h12V6H6v12zM8 8h8v8H8V8z' />
  
    </svg>
  );
}