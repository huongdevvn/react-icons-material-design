import React from 'react';

export default function IconFileUploadFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z' />
  
    </svg>
  );
}