import React from 'react';

export default function IconCallMissedTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z' />
  
    </svg>
  );
}