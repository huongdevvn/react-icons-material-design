import React from 'react';

export default function IconNightShelterRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m10.8 3.9-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zm-1.05 8.6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM16.5 18c-.28 0-.5-.22-.5-.5v-1H8v1c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-6c0-.28.22-.5.5-.5s.5.22.5.5v4h3.5v-3c0-.28.22-.5.5-.5h3c1.1 0 2 .9 2 2v3.5c0 .28-.22.5-.5.5z' />
  
    </svg>
  );
}