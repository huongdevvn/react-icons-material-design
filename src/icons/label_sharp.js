import React from 'react';

export default function IconLabelSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17.03 5 3 5.01v13.98l14.03.01L22 12l-4.97-7z' />
  
    </svg>
  );
}