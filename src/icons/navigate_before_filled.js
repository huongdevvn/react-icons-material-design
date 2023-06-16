import React from 'react';

export default function IconNavigateBeforeFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
  
    </svg>
  );
}