import React from 'react';

export default function IconCropPortraitSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 3H5v18h14V3zm-2 16H7V5h10v14z' />
  
    </svg>
  );
}