import React from 'react';

export default function IconSplitscreenSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M18 4v5H6V4h12m2-2H4v9h16V2zm-2 13v5H6v-5h12m2-2H4v9h16v-9z' />
  
    </svg>
  );
}