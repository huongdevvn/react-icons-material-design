import React from 'react';

export default function IconPauseTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 5h4v14H6zm8 0h4v14h-4z' />
  
    </svg>
  );
}