import React from 'react';

export default function ShortTextFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M4 9h16v2H4V9zm0 4h10v2H4v-2z' />
    </svg>
  );
}
