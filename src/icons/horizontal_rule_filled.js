import React from 'react';

export default function IconHorizontalRuleFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path fillRule='evenodd' d='M4 11h16v2H4z' />
  
    </svg>
  );
}