import React from 'react';

export default function IconCompostRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M11.73 21.5c-4.95-.14-9.08-4.27-9.22-9.22C2.35 6.91 6.67 2.5 12 2.5V1.21c0-.45.54-.67.85-.35l2.79 2.79c.2.2.2.51 0 .71l-2.79 2.79a.5.5 0 0 1-.85-.36V5.5c-3.58 0-6.5 2.92-6.5 6.5 0 2.21 1.11 4.17 2.81 5.35.51-.92 1.63-1.62 2.98-1.8-.09-.69-.26-1.42-.49-2.03-.33.28-.75.46-1.22.48-1.14.05-2.08-.99-2.08-2.13v-.86c0-.29-.05-.57-.14-.83a.49.49 0 0 1 .5-.66c1.3.09 3.6.52 3.64 2.48 0 .29-.06.56-.17.8-.42-.32-.86-.6-1.33-.8.58.43 1.37 1.37 2 2.6.67-1.62 1.68-3.27 3-4.6-.76.52-1.47 1.12-2.13 1.81-.26-.42-.4-.93-.36-1.47C12.59 9 13.79 8 15.13 8H16c.56 0 .97-.14 1.28-.31a.5.5 0 0 1 .75.44C17.99 9.87 17.56 13 15 13c-.49 0-.94-.14-1.32-.38-.24.64-.59 1.76-.76 2.96 1.26.22 2.28.89 2.77 1.77a6.514 6.514 0 0 0 2.79-4.87c.02-.26.23-.48.5-.48h1.82c.47 0 .71.24.69.52-.28 5.09-4.58 9.12-9.76 8.98z' />
  
    </svg>
  );
}