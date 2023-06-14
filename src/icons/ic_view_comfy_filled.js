import React from 'react';

export default function icViewComfyFilled({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M2 4v7h20V4H2zm8 16h12v-7H10v7zm-8 0h6v-7H2v7z' />
    </svg>
  );
}
