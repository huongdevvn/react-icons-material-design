import React from 'react';

export default function IconSkipPreviousFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 6h2v12H6zm3.5 6 8.5 6V6z' />
  
    </svg>
  );
}