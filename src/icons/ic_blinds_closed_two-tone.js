import React from 'react';

export default function icBlindsClosedTwoTone({ ...restProps }) {
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
        opacity='.3'
        d='M6 5h8v2H6zM6 9h8v2H6zM16 17h2v2h-2zM6 13h8v2H6zM6 17h8v2H6zM16 13h2v2h-2zM16 5h2v2h-2zM16 9h2v2h-2z'
      />
      <path d='M20 19V3H4v16H2v2h11.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2h-2zm-6 0H6v-2h8v2zm0-4H6v-2h8v2zm0-4H6V9h8v2zm0-4H6V5h8v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2z' />
    </svg>
  );
}