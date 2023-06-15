import * as React from 'react';
const icPendingOutlined = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='currentColor'
    {...props}
  >
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' />
    <circle cx={7} cy={12} r={1.5} />
    <circle cx={12} cy={12} r={1.5} />
    <circle cx={17} cy={12} r={1.5} />
  </svg>
);
export default icPendingOutlined;
