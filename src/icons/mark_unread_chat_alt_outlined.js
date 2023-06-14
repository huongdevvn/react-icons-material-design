import React from 'react';

export default function MarkUnreadChatAltOutlined({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M20 16H4V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92V16z' />
      <circle cx='19' cy='3' r='3' />
      <path d='M6 12h8v2H6zM6 9h12v2H6zM6 8h12v-.1A5.013 5.013 0 0 1 15.03 6H6v2z' />
    </svg>
  );
}
