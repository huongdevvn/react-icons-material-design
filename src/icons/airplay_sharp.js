import React from 'react';

export default function IconAirplaySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 22h12l-6-6-6 6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6V3z' />
  
    </svg>
  );
}