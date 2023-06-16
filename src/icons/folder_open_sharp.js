import React from 'react';

export default function IconFolderOpenSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z' />
  
    </svg>
  );
}