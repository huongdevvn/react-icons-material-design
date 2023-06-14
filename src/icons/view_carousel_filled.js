import React from 'react';

export default function ViewCarouselFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M2 7h4v10H2V7zm5 12h10V5H7v14zM18 7h4v10h-4V7z' />
    </svg>
  );
}
