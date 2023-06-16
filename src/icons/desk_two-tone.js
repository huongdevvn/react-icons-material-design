import React from 'react';

export default function IconDeskTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 8h4v2h-4zm0 4h4v2h-4z' opacity={0.3} />
    <path d='M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z' />
  
    </svg>
  );
}