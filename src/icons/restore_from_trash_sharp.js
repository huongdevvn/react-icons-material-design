import React from 'react';

export default function IconRestoreFromTrashSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 21h12V7H6v14zm6-11 4 4h-2v4h-4v-4H8l4-4zm3.5-6-1-1h-5l-1 1H5v2h14V4z' />
  
    </svg>
  );
}