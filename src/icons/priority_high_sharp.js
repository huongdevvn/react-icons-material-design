import React from 'react';

export default function IconPriorityHighSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <circle cx={12} cy={19} r={2} />
    <path d='M10 3h4v12h-4z' />
  
    </svg>
  );
}