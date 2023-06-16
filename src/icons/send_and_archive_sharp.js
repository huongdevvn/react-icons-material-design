import React from 'react';

export default function IconSendAndArchiveSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M17 10c.1 0 .19.01.28.01L3 4v6l8 2-8 2v6l7-2.95V17c0-3.87 3.13-7 7-7z' />
    <path d='M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8-3-3h2.5v-3h1v3H20l-3 3z' />
  
    </svg>
  );
}