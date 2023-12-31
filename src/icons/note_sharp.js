import React from 'react';

export default function IconNoteSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m22 10-6-6H2v16h20V10zm-7-4.5 5.5 5.5H15V5.5z' />
  
    </svg>
  );
}