import React from 'react';

export default function IconEqualizerTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z' />
  
    </svg>
  );
}