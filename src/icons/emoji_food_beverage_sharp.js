import React from 'react';

export default function IconEmojiFoodBeverageSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M2 19h18v2H2zM20 3H9v2.4L11 7v5H6V7l2-1.6V3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3z' />
  
    </svg>
  );
}