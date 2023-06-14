import React from 'react';

export default function icSendTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path
        d='m4 8.25 7.51 1-7.5-3.22zm.01 9.72 7.5-3.22-7.51 1z'
        opacity='.3'
      />
      <path d='M2.01 3 2 10l15 2-15 2 .01 7L23 12 2.01 3zM4 8.25V6.03l7.51 3.22-7.51-1zm.01 9.72v-2.22l7.51-1-7.51 3.22z' />
    </svg>
  );
}
