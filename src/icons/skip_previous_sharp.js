import React from 'react';

export default function SkipPreviousSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M6 6h2v12H6V6zm3.5 6 8.5 6V6l-8.5 6z' />
    </svg>
  );
}
