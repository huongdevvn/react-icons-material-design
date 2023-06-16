import React from 'react';

export default function IconPlaylistPlaySharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z' />
  
    </svg>
  );
}