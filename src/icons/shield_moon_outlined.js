import React from 'react';

export default function IconShieldMoonOutlined({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z' />
    <path d='M9.01 14.33c1.75 2.17 5.12 2.24 6.96.07.23-.27.08-.68-.26-.74a4.491 4.491 0 0 1-3.18-2.2 4.503 4.503 0 0 1-.32-3.86.453.453 0 0 0-.51-.6c-3.34.62-4.89 4.61-2.69 7.33z' />
  
    </svg>
  );
}