import React from 'react';

export default function IconPlayArrowSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M8 5v14l11-7L8 5z' />
  
    </svg>
  );
}