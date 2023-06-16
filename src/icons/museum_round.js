import React from 'react';

export default function IconMuseumRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M21.5 11c.28 0 .5-.22.5-.5V9.26c0-.16-.08-.32-.21-.41L12.57 2.4c-.34-.24-.8-.24-1.15 0L2.21 8.85c-.13.09-.21.25-.21.41v1.24c0 .28.22.5.5.5H4v9H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1v-9h1.5zM16 17c0 .55-.45 1-1 1s-1-.45-1-1v-3l-1.17 1.75a1 1 0 0 1-1.66 0L10 14v3c0 .55-.45 1-1 1s-1-.45-1-1v-4.7a1.297 1.297 0 0 1 2.38-.72L12 14l1.61-2.42c.25-.36.65-.58 1.09-.58.72 0 1.3.58 1.3 1.3V17z' />
  
    </svg>
  );
}