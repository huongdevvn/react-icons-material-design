import React from 'react';

export default function TimerOffTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path
        d='M12 20c1.47 0 2.83-.45 3.95-1.22L6.22 9.05A6.945 6.945 0 0 0 5 13c0 3.87 3.13 7 7 7zM12 6c-.94 0-1.83.19-2.65.52L11 8.17V8h2v2.17l5.48 5.48c.33-.82.52-1.71.52-2.65 0-3.87-3.13-7-7-7z'
        opacity='.3'
      />
      <path d='M9 1h6v2H9zM12 6c3.87 0 7 3.13 7 7 0 .94-.19 1.83-.52 2.65l1.5 1.5a8.963 8.963 0 0 0-.95-9.76l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42a8.962 8.962 0 0 0-9.77-.96l1.5 1.5A7.07 7.07 0 0 1 12 6z' />
      <path d='M11 8v.17l2 2V8zM2.81 2.81 1.39 4.22l3.4 3.4a8.994 8.994 0 0 0 12.59 12.59l2.4 2.4 1.41-1.41L2.81 2.81zM12 20c-3.87 0-7-3.13-7-7 0-1.47.45-2.83 1.22-3.95l9.73 9.73A6.945 6.945 0 0 1 12 20z' />
    </svg>
  );
}
