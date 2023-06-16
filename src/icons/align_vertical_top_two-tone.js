import React from 'react';

export default function IconAlignVerticalTopTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z' />
  
    </svg>
  );
}