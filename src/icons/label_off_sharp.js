import React from 'react';

export default function IconLabelOffSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m22 12-4.97-7H8.66l10.7 10.73zM2 4l1 1v14h14l2 2 1.41-1.41L3.44 2.62z' />
  
    </svg>
  );
}