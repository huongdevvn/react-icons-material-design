import React from 'react';

export default function ManSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M16 7H8v8h2v7h4v-7h2z' />
      <circle cx='12' cy='4' r='2' />
    </svg>
  );
}
