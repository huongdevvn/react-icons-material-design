import React from 'react';

export default function icDeskRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M2 7v10c0 .55.45 1 1 1s1-.45 1-1V8h10v9c0 .55.45 1 1 1s1-.45 1-1v-1h4v1c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1zm18 1v2h-4V8h4zm-4 6v-2h4v2h-4z' />
    </svg>
  );
}
