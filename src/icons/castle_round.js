import React from 'react';

export default function IconCastleRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 9c-.55 0-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7V4c0-.55-.45-1-1-1s-1 .45-1 1v7H3v-1c0-.55-.45-1-1-1s-1 .45-1 1v9c0 1.1.9 2 2 2h7v-3c0-1.1.9-2 2-2s2 .9 2 2v3h7c1.1 0 2-.9 2-2v-9c0-.55-.45-1-1-1zm-11 3H9V9h2v3zm4 0h-2V9h2v3z' />
  
    </svg>
  );
}