import React from 'react';

export default function IconWeekendSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 9.03V14h12V9.03h2V5H4v4.03zM19 15H5v-4.97H1V19h22v-8.97h-4z' />
  
    </svg>
  );
}