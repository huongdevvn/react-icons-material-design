import React from 'react';

export default function AutofpsSelectSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M12.03 6.3h-.06l-1.02 2.89h2.1zM3 17h2v5H3z' />
      <path d='M12 15c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm-.63-10h1.25l2.63 7h-1.21l-.63-1.79h-2.83L9.96 12H8.74l2.63-7zM7 17h2v5H7zM11 17h2v5h-2zM15 17h6v5h-6z' />
    </svg>
  );
}
