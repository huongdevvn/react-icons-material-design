import React from 'react';

export default function icWatchRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M20 12c0-2.54-1.19-4.81-3.04-6.27l-.68-4.06C16.12.71 15.28 0 14.31 0H9.7c-.98 0-1.82.71-1.98 1.67l-.67 4.06C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27l.67 4.06c.16.96 1 1.67 1.98 1.67h4.61c.98 0 1.81-.71 1.97-1.67l.68-4.06A7.976 7.976 0 0 0 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z' />
    </svg>
  );
}
