import React from 'react';

export default function IconFlashlightOffFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 5V2H6v1.17L7.83 5zm-2 6 2-3V7H9.83L16 13.17zM2.81 2.81 1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81z' />
  
    </svg>
  );
}