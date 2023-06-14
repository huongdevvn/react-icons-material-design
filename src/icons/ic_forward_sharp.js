import React from 'react';

export default function icForwardSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M12 8V4l8 8-8 8v-4H4V8h8z' />
    </svg>
  );
}
