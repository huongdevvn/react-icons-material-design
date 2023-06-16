import React from 'react';

export default function IconAirlinesSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M13 4 2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z' />
  
    </svg>
  );
}