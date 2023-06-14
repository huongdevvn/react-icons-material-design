import React from 'react';

export default function icBookSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M20 2H4v20h16V2zM6 4h5v8l-2.5-1.5L6 12V4z' />
    </svg>
  );
}
