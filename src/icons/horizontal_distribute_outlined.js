import React from 'react';

export default function IconHorizontalDistributeOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z' />
  
    </svg>
  );
}