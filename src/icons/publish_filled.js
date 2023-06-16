import React from 'react';

export default function IconPublishFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z' />
  
    </svg>
  );
}