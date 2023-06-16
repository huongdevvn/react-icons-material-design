import React from 'react';

export default function IconTurnedInNotSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 3H5.01L5 21l7-3 7 3V3zm-2 15-5-2.18L7 18V5h10v13z' />
  
    </svg>
  );
}