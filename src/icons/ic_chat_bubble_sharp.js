import React from 'react';

export default function icChatBubbleSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 2H2v20l4-4h16V2z' />
    </svg>
  );
}
