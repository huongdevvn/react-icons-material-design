import React from 'react';

export default function icMedicationSharp({ ...restProps }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...restProps}
    >
      <path d='M6 3h12v2H6zM19 6H5v15h14V6zm-3 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16v3z' />
    </svg>
  );
}