import React from 'react';

export default function IconMarkAsUnreadSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16.23 7h4.12L10.5 2 2 6.21V17h2V7.4L10.5 4z' />
    <path d='M5 8v13h17V8H5zm15 4-6.5 3.33L7 12v-2l6.5 3.33L20 10v2z' />
  
    </svg>
  );
}