import React from 'react';

export default function IconTourRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20.45 5.37A.999.999 0 0 0 19.52 4H7V3c0-.55-.45-1-1-1s-1 .45-1 1v19h2v-8h12.52c.71 0 1.19-.71.93-1.37L19 9l1.45-3.63zM15 9c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z' />
  
    </svg>
  );
}