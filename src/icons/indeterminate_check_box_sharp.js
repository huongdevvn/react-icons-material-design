import React from 'react';

export default function IndeterminateCheckBoxSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M21 3H3v18h18V3zm-4 10H7v-2h10v2z' />
    </svg>
  );
}
