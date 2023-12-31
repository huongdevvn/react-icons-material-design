import React from 'react';

export default function IconWebStoriesSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 4h2v16h-2V4zM2 2v20h13V2H2zm19 16h1.5V6H21v12z' />
  
    </svg>
  );
}