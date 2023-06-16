import React from 'react';

export default function IconShortTextTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 9h16v2H4zm0 4h10v2H4z' />
  
    </svg>
  );
}