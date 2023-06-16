import React from 'react';

export default function IconFeaturedPlayListSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M23 3H1v18h22V3zm-11 8H3V9h9v2zm0-4H3V5h9v2z' />
  
    </svg>
  );
}