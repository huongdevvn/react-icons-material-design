import React from 'react';

export default function IconCurrencyFrancRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v12H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1s1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-3h7c.55 0 1-.45 1-1s-.45-1-1-1H9V5h8c.55 0 1-.45 1-1z' />
  
    </svg>
  );
}