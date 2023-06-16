import React from 'react';

export default function IconKeyboardCapslockRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m12 8.41 3.89 3.89a.996.996 0 1 0 1.41-1.41L12.71 6.3a.996.996 0 0 0-1.41 0l-4.6 4.59a.996.996 0 1 0 1.41 1.41L12 8.41zM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1z' />
  
    </svg>
  );
}