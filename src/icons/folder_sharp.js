import React from 'react';

export default function FolderSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M10 4H2v16h20V6H12l-2-2z' />
    </svg>
  );
}
