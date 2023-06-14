import React from 'react';

export default function StayCurrentPortraitSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19 1.01 5.01 1v22H19V1.01zM17 19H7V5h10v14z' />
    </svg>
  );
}
