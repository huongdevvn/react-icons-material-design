import React from 'react';

export default function IconChatBubbleOutlineSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 2H2v20l4-4h16V2zm-2 14H6l-2 2V4h16v12z' />
  
    </svg>
  );
}