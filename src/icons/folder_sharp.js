import React from 'react';

export default function IconFolderSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M10 4H2v16h20V6H12l-2-2z' />
  
    </svg>
  );
}