import React from 'react';

export default function DragHandleSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M20 9H4v2h16V9zM4 15h16v-2H4v2z' />
    </svg>
  );
}
