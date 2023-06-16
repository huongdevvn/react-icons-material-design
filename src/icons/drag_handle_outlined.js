import React from 'react';

export default function IconDragHandleOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 9H4v2h16V9zM4 15h16v-2H4v2z' />
  
    </svg>
  );
}