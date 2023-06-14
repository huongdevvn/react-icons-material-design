import React from 'react';

export default function SpaceDashboardSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M11 21H3V3h8v18zm2 0h8v-9h-8v9zm8-11V3h-8v7h8z' />
    </svg>
  );
}
