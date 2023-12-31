import React from 'react';

export default function IconSdCardAlertSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 2H10L4 8v14h16V2zm-7 15h-2v-2h2v2zm0-4h-2V8h2v5z' />
  
    </svg>
  );
}