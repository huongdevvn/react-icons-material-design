import React from 'react';

export default function icMapsHomeWorkFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M1 11v10h5v-6h4v6h5V11L8 6z' />
      <path d='M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z' />
    </svg>
  );
}
