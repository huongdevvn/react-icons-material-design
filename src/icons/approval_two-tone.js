import React from 'react';

export default function ApprovalTwoTone({ ...restProps }) {
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
        d='M6 16h12v2H6zM12 4c-1.66 0-3 1.34-3 3l3 4 3-4c0-1.66-1.34-3-3-3z'
      />
      <path d='M12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4zM18 14H6c-1.1 0-2 .9-2 2v6h16v-6c0-1.1-.9-2-2-2zm0 4H6v-2h12v2z' />
    </svg>
  );
}
