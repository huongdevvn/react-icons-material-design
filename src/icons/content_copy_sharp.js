import React from 'react';

export default function IconContentCopySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z' />
  
    </svg>
  );
}