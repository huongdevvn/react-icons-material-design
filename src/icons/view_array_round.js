import React from 'react';

export default function ViewArrayRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M20 5h-1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-4 0H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM5 5H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z' />
    </svg>
  );
}
