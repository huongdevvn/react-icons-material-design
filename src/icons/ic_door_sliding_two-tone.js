import React from 'react';

export default function icDoorSlidingTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path
        d='M13 19h5V5h-5v14zm1-8h2v2h-2v-2zM6 19h5V5H6v14zm2-8h2v2H8v-2z'
        opacity='.3'
      />
      <path d='M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3v2h18v-2h-1zm-9 0H6V5h5v14zm7 0h-5V5h5v14z' />
      <path d='M8 11h2v2H8zM14 11h2v2h-2z' />
    </svg>
  );
}
