import React from 'react';

export default function IconFormatOverlineOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 3v2H5V3h14zm-7 4c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 11.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 9.5 12 9.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z' />
  
    </svg>
  );
}