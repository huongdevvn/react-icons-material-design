import React from 'react';

export default function IconHorizontalSplitFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z' />
  
    </svg>
  );
}