import React from 'react';

export default function SmartDisplaySharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 4H2v16h20V4zM9.5 16.5v-9l7 4.5-7 4.5z' />
    </svg>
  );
}
