import React from 'react';

export default function IconFileCopySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M16 1H2v16h2V3h12V1zm-1 4 6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z' />
  
    </svg>
  );
}