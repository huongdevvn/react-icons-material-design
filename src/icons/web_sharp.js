import React from 'react';

export default function WebSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 4H2v16h20V4zM4 9h10.5v3.5H4V9zm0 5.5h10.5V18H4v-3.5zM20 18h-3.5V9H20v9z' />
    </svg>
  );
}
