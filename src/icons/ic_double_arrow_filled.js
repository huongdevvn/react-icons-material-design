import React from 'react';

export default function icDoubleArrowFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M15.5 5H11l5 7-5 7h4.5l5-7z' />
      <path d='M8.5 5H4l5 7-5 7h4.5l5-7z' />
    </svg>
  );
}
