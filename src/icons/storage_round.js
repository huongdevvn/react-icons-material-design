import React from 'react';

export default function IconStorageRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm0-3h2v2H4v-2zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2zm4 1H4V5h2v2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm0-3h2v2H4v-2z' />
  
    </svg>
  );
}