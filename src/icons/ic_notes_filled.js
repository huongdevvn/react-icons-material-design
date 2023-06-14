import React from 'react';

export default function icNotesFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z' />
    </svg>
  );
}