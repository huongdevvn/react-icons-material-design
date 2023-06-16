import React from 'react';

export default function IconFlashOnFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M7 2v11h3v9l7-12h-4l4-8z' />
  
    </svg>
  );
}