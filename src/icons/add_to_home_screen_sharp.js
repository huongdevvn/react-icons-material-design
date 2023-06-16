import React from 'react';

export default function IconAddToHomeScreenSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 1.01 6 1v5h2V5h10v14H8v-1H6v5h14V1.01zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41V15z' />
  
    </svg>
  );
}