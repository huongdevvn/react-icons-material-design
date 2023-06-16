import React from 'react';

export default function IconVerticalAlignTopTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z' />
  
    </svg>
  );
}