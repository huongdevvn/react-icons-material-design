import React from 'react';

export default function icDehazeTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M2 16v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20V6H2z' />
    </svg>
  );
}