import React from 'react';

export default function IconCollectionsSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 18V2H6v16h16zm-11-6 2.03 2.71L16 11l4 5H8l3-4zM2 6v16h16v-2H4V6H2z' />
  
    </svg>
  );
}