import React from 'react';

export default function IconForwardSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 8V4l8 8-8 8v-4H4V8h8z' />
  
    </svg>
  );
}