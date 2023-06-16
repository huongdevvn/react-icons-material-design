import React from 'react';

export default function IconFormatItalicTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z' />
  
    </svg>
  );
}