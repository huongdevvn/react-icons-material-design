import React from 'react';

export default function icPolicyFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='m21 5-9-4-9 4v6c0 5.55 3.84 10.74 9 12 2.3-.56 4.33-1.9 5.88-3.71l-3.12-3.12a4.994 4.994 0 0 1-6.29-.64 5.003 5.003 0 0 1 0-7.07 5.003 5.003 0 0 1 7.07 0 5.006 5.006 0 0 1 .64 6.29l2.9 2.9C20.29 15.69 21 13.38 21 11V5z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}