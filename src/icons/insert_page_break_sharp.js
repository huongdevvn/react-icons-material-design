import React from 'react';

export default function InsertPageBreakSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M4 17h16v5H4zM20 8l-6-6H4.01L4 11h16V8zm-7 1V3.5L18.5 9H13zM9 13h6v2H9zM17 13h6v2h-6zM1 13h6v2H1z' />
    </svg>
  );
}
