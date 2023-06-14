import React from 'react';

export default function AutoAwesomeMosaicTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path opacity='.3' d='M5 5h4v14H5zM15 15h4v4h-4zM15 5h4v4h-4z' />
      <path d='M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2zm6 14H5V5h4v14zM19 3h-6v8h8V5c0-1.1-.9-2-2-2zm0 6h-4V5h4v4zM13 21h6c1.1 0 2-.9 2-2v-6h-8v8zm2-6h4v4h-4v-4z' />
    </svg>
  );
}
