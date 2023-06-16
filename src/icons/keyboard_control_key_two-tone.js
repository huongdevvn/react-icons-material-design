import React from 'react';

export default function IconKeyboardControlKeyTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z' />
  
    </svg>
  );
}