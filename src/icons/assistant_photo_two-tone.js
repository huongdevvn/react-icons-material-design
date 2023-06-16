import React from 'react';

export default function IconAssistantPhotoTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z' opacity={0.3} />
    <path d='M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2v-7zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7V6z' />
  
    </svg>
  );
}