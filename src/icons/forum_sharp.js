import React from 'react';

export default function ForumSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z' />
    </svg>
  );
}
