import React from 'react';

export default function IconGridViewTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 5h4v4H5zm0 10h4v4H5zm10 0h4v4h-4zm0-10h4v4h-4z' opacity={0.3} />
    <path d='M3 21h8v-8H3v8zm2-6h4v4H5v-4zm-2-4h8V3H3v8zm2-6h4v4H5V5zm8 16h8v-8h-8v8zm2-6h4v4h-4v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4z' />
  
    </svg>
  );
}