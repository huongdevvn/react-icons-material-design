import React from 'react';

export default function OfflinePinRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4 16H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm-6.41-4.71L7.7 11.4a.984.984 0 0 1 0-1.4.984.984 0 0 1 1.4 0l1.2 1.2 4.6-4.6a.984.984 0 0 1 1.4 0c.39.39.39 1.01 0 1.4l-5.29 5.29c-.39.39-1.03.39-1.42 0z' />
    </svg>
  );
}
