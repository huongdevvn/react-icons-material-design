import React from 'react';

export default function icViewArraySharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z' />
    </svg>
  );
}