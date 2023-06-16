import React from 'react';

export default function IconClearAllTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z' />
  
    </svg>
  );
}