import React from 'react';

export default function IconFlagSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z' />
  
    </svg>
  );
}