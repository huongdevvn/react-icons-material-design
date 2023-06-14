import React from 'react';

export default function icViewDaySharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z' />
    </svg>
  );
}
