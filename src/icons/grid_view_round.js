import React from 'react';

export default function IconGridViewRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 11h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm0 10h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2zm8-16v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2zm2 16h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2z' />
  
    </svg>
  );
}