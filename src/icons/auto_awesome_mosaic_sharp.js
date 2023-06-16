import React from 'react';

export default function IconAutoAwesomeMosaicSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 21h8V3H3v18zM21 3h-8v8h8V3zm-8 18h8v-8h-8v8z' />
  
    </svg>
  );
}