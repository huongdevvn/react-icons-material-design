import React from 'react';

export default function icTypeSpecimenTwoTone({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path opacity='.3' d='M14.04 7.17h-.08l-1.31 3.72h2.69z' />
      <path
        d='M8 16h12V4H8v12zm5.2-10.5h1.61l3.38 9h-1.56l-.8-2.3H12.2l-.82 2.3H9.81l3.39-9z'
        opacity='.3'
      />
      <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z' />
      <path d='M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z' />
      <path d='M12.19 12.2h3.63l.8 2.3h1.56l-3.38-9h-1.6l-3.38 9h1.56l.81-2.3zm1.77-5.03h.08l1.31 3.72h-2.69l1.3-3.72z' />
    </svg>
  );
}
