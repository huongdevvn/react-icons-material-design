import React from 'react';

export default function IconVerticalAlignTopFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z' />
  
    </svg>
  );
}