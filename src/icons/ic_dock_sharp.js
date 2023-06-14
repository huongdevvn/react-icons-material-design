import React from 'react';

export default function icDockSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M8 23h8v-2H8v2zM18 1.01 6 1v18h12V1.01zM16 15H8V5h8v10z' />
    </svg>
  );
}
