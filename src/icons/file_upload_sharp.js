import React from 'react';

export default function IconFileUploadSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z' />
  
    </svg>
  );
}