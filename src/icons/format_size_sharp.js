import React from 'react';

export default function IconFormatSizeSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z' />
  
    </svg>
  );
}