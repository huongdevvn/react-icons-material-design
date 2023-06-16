import React from 'react';

export default function IconBarChartSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z' />
  
    </svg>
  );
}