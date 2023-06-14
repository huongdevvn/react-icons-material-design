import React from 'react';

export default function icFluorescentTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path opacity='.3' d='M7 11h10v2H7z' />
      <path d='M5 15h14V9H5v6zm2-4h10v2H7v-2zM11 2h2v3h-2zM17.286 6.399l1.79-1.803 1.42 1.41-1.79 1.802zM11 19h2v3h-2zM17.29 17.71l1.79 1.8 1.42-1.42-1.8-1.79zM3.495 6.01l1.407-1.408L6.69 6.391 5.284 7.798zM3.492 18.076l1.803-1.79 1.409 1.42-1.803 1.79z' />
    </svg>
  );
}
