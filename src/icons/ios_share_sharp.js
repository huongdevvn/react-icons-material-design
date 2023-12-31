import React from 'react';

export default function IconIosShareSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 8h-5v2h3v11H6V10h3V8H4v15h16z' />
    <path d='M11 16h2V5h3l-4-4-4 4h3z' />
  
    </svg>
  );
}