import React from 'react';

export default function IconVideocamSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4z' />
  
    </svg>
  );
}