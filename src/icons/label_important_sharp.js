import React from 'react';

export default function IconLabelImportantSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 18.99h12.04L21 12l-4.97-7H4l5 7-5 6.99z' />
  
    </svg>
  );
}