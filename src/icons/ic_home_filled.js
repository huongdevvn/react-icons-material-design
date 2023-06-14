import React from 'react';

export default function icHomeFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
    </svg>
  );
}
