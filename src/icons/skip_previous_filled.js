import React from 'react';

export default function SkipPreviousFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M6 6h2v12H6zm3.5 6 8.5 6V6z' />
    </svg>
  );
}
