import React from 'react';

export default function Icon14mpSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M15 14h1.5v1.5H15z' />
    <path d='M3 3v18h18V3H3zm9 2.5h1.5v3H15v-3h1.5v3h1V10h-1v1.5H15V10h-3V5.5zm-5 0h3v6H8.5V7H7V5.5zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM18 17h-3v1.5h-1.5v-6H18V17z' />
  
    </svg>
  );
}