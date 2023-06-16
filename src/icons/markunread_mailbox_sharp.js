import React from 'react';

export default function IconMarkunreadMailboxSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 6H10v6H8V4h6V0H6v6H2v16h20V6z' />
  
    </svg>
  );
}