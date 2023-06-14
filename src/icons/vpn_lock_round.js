import React from 'react';

export default function VpnLockRound({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M19.92 11c.44 3.63-1.52 5.85-2.02 6.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2V2.46c-.95-.3-1.95-.46-3-.46C6.48 2 2 6.48 2 12s4.48 10 10 10c5.73 0 10.51-4.86 9.95-11h-2.03zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM22 4v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 18 3v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-1 0h-2V3c0-.55.45-1 1-1s1 .45 1 1v1z' />
    </svg>
  );
}
