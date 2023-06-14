import React from 'react';

export default function icCompressSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M4 9h16v2H4zM16 4h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zM4 12h16v2H4z' />
    </svg>
  );
}
