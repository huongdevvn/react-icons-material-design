import React from 'react';

export default function IconPentagonSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m2 9 4 12h12l4-12-10-7z' />
  
    </svg>
  );
}