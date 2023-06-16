import React from 'react';

export default function IconNightShelterFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 3 4 9v12h16V9l-8-6zm-2.25 9.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM17 18h-1v-1.5H8V18H7v-7h1v4.5h3.5V12H15c1.1 0 2 .9 2 2v4z' />
  
    </svg>
  );
}