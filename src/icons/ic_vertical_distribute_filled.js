import React from 'react';

export default function icVerticalDistributeFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z' />
    </svg>
  );
}