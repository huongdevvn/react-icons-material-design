import React from 'react';

export default function IconPhoneLockedSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20 5V4c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1v5h6V5h-1zm-1 0h-2V4c0-.55.45-1 1-1s1 .45 1 1v1z' />
    <path d='m21 15-5-1-2.9 2.9c-2.5-1.43-4.57-3.5-6-6L10 8 9 3H3c0 3.28.89 6.35 2.43 9 1.58 2.73 3.85 4.99 6.57 6.57C14.65 20.1 17.72 21 21 21v-6z' />
  
    </svg>
  );
}