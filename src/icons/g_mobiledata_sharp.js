import React from 'react';

export default function IconGMobiledataSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 11v2h2v2H9V9h7V7H7v10h9v-6h-4z' />
  
    </svg>
  );
}