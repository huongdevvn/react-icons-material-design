import React from 'react';

export default function icDoneFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
    </svg>
  );
}
