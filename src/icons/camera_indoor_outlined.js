import React from 'react';

export default function IconCameraIndoorOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14 13v-1c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L14 13zm-2-7.5 6 4.5v9H6v-9l6-4.5M12 3 4 9v12h16V9l-8-6z' />
  
    </svg>
  );
}