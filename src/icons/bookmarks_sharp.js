import React from 'react';

export default function IconBookmarksSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m19 18 2 1V1H7v2h12v15zM17 5H3v18l7-3 7 3V5z' />
  
    </svg>
  );
}