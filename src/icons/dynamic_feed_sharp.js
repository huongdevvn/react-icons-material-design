import React from 'react';

export default function DynamicFeedSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M8 8H6v9h11v-2H8z' />
      <path d='M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z' />
    </svg>
  );
}
