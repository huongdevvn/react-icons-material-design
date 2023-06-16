import React from 'react';

export default function IconFormatPaintSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z' />
  
    </svg>
  );
}