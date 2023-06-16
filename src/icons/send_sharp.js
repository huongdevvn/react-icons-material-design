import React from 'react';

export default function IconSendSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7z' />
  
    </svg>
  );
}