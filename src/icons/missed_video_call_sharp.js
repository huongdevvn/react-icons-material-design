import React from 'react';

export default function IconMissedVideoCallSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 10.5V6H3v12h14v-4.5l4 4v-11l-4 4zM10 15l-3.89-3.89v2.55H5V9.22h4.44v1.11H6.89l3.11 3.1 4.22-4.22.78.79-5 5z' />
  
    </svg>
  );
}