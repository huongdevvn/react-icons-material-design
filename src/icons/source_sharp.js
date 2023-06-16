import React from 'react';

export default function IconSourceSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m12 6-2-2H2v16h20V6H12zm2 10H6v-2h8v2zm4-4H6v-2h12v2z' />
  
    </svg>
  );
}