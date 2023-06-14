import React from 'react';

export default function DeblurTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <circle cx='6' cy='14' r='1' />
      <circle cx='6' cy='18' r='1' />
      <circle cx='6' cy='10' r='1' />
      <circle cx='3' cy='10' r='.5' />
      <circle cx='6' cy='6' r='1' />
      <circle cx='3' cy='14' r='.5' />
      <circle cx='10' cy='21' r='.5' />
      <circle cx='10' cy='3' r='.5' />
      <circle cx='10' cy='6' r='1' />
      <circle cx='10' cy='14' r='1.5' />
      <circle cx='10' cy='10' r='1.5' />
      <circle cx='10' cy='18' r='1' />
      <path d='M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z' />
      <path d='M12 5v14c3.86 0 7-3.14 7-7s-3.14-7-7-7z' opacity='.3' />
    </svg>
  );
}
