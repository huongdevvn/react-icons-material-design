import React from 'react';

export default function IconOutboundFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.88 9.54L8.92 16.5l-1.41-1.41 4.96-4.96L10.34 8l5.65.01.01 5.65-2.12-2.12z' />
  
    </svg>
  );
}