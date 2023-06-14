import React from 'react';

export default function icFeaturedVideoSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M23 3H1v18h22V3zm-11 9H3V5h9v7z' />
    </svg>
  );
}