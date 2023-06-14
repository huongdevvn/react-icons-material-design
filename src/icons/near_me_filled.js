import React from 'react';

export default function NearMeFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z' />
    </svg>
  );
}
