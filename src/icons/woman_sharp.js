import React from 'react';

export default function WomanSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M13.41 7h-2.82L7 16h3v6h4v-6h3z' />
      <circle cx='12' cy='4' r='2' />
    </svg>
  );
}
