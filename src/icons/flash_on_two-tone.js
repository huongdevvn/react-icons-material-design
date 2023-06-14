import React from 'react';

export default function FlashOnTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M17 10h-4l3-8H7v11h3v9z' />
    </svg>
  );
}
