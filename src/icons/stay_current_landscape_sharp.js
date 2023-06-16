import React from 'react';

export default function IconStayCurrentLandscapeSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M1 19h22V5H1v14zM19 7v10H5V7h14z' />
  
    </svg>
  );
}