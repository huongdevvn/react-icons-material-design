import React from 'react';

export default function IconViewCarouselSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 7h4v10H2V7zm5 12h10V5H7v14zM18 7h4v10h-4V7z' />
  
    </svg>
  );
}