import React from 'react';

export default function IconNightShelterTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path
      d='m12 5.5 6 4.5v9H6v-9l6-4.5m3 6.5h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z'
      opacity={0.3}
    />
    <path d='m12 5.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2zm-5.25.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z' />
  
    </svg>
  );
}