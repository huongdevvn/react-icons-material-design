import React from 'react';

export default function IconSortSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' />
  
    </svg>
  );
}