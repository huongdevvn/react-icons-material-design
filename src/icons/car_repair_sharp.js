import React from 'react';

export default function CarRepairSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M4 17.01V19h7v3h2v-3h7v-1.99H4zM7 14h10v2h2V8.69L17.11 3H6.89L5 8.69V16h2v-2zm2-2.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8.33 5h7.34l.66 2H7.67l.66-2z' />
    </svg>
  );
}
