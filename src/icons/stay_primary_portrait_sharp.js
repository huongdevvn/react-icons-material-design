import React from 'react';

export default function IconStayPrimaryPortraitSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5.01 1v22H19V1H5.01zM17 19H7V5h10v14z' />
  
    </svg>
  );
}