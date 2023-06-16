import React from 'react';

export default function IconVerticalAlignBottomFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z' />
  
    </svg>
  );
}