import React from 'react';

export default function IconScreenshotMonitorSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 3H2v16h6v2h8v-2h6V3zm-2 14H4V5h16v12z' />
    <path d='M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z' />
  
    </svg>
  );
}