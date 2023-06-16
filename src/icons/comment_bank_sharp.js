import React from 'react';

export default function IconCommentBankSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 2v20l4-4h16V2H2zm17 11-2.5-1.5L14 13V5h5v8z' />
  
    </svg>
  );
}