import React from 'react';

export default function IconPauseOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
  
    </svg>
  );
}