import React from 'react';

export default function IconNotesSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z' />
  
    </svg>
  );
}