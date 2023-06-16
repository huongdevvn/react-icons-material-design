import React from 'react';

export default function IconCardMembershipSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 2H2v15h6v5l4-2 4 2v-5h6V2zm-2 13H4v-2h16v2zm0-5H4V4h16v6z' />
  
    </svg>
  );
}