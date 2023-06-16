import React from 'react';

export default function IconFolderCopySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 6H1v15h19v-2H3z' />
    <path d='M23 4h-9l-2-2H5.01L5 17h18V4z' />
  
    </svg>
  );
}