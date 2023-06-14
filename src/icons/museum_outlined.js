import React from 'react';

export default function MuseumOutlined({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z' />
      <path d='m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z' />
    </svg>
  );
}
