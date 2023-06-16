import React from 'react';

export default function IconClearAllOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z' />
  
    </svg>
  );
}