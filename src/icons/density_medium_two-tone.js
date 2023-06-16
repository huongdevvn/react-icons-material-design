import React from 'react';

export default function IconDensityMediumTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z' />
  
    </svg>
  );
}