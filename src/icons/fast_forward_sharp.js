import React from 'react';

export default function FastForwardSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z' />
    </svg>
  );
}
