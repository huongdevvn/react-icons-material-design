import React from 'react';

export default function icDoorbellRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m10.8 3.9-6 4.5c-.5.38-.8.97-.8 1.6v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9c0-.63-.3-1.22-.8-1.6l-6-4.5a2.01 2.01 0 0 0-2.4 0zM12 17.5c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1zm3.5-1.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H9v-2.34c0-1.54.82-2.82 2.25-3.16v-.25c0-.41.34-.75.75-.75s.75.34.75.75v.25c1.44.34 2.25 1.62 2.25 3.16V15h.5c.28 0 .5.22.5.5s-.22.5-.5.5z' />
    </svg>
  );
}