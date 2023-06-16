import React from 'react';

export default function IconCallReceivedTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z' />
  
    </svg>
  );
}