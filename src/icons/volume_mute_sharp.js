import React from 'react';

export default function IconVolumeMuteSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M7 9v6h4l5 5V4l-5 5H7z' />
  
    </svg>
  );
}