import React from 'react';

export default function IconVideoLabelSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M23 3H1v18h22V3zm-2 13H3V5h18v11z' />
  
    </svg>
  );
}