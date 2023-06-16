import React from 'react';

export default function IconCreditCardSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 4H2.01L2 20h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z' />
  
    </svg>
  );
}