import React from 'react';

export default function IconCallMissedOutgoingTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z' />
  
    </svg>
  );
}