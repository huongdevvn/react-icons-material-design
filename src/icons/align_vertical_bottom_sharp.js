import React from 'react';

export default function IconAlignVerticalBottomSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z' />
  
    </svg>
  );
}