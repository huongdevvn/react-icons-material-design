import React from 'react';

export default function icPentagonFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m2 9 4 12h12l4-12-10-7z' />
    </svg>
  );
}
