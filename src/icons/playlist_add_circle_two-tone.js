import React from 'react';

export default function IconPlaylistAddCircleTwoTone({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path
      d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zM7 7h7v2H7V7zm3 8H7v-2h3v2zm-3-3v-2h7v2H7zm10 3v2h-2v-2h-2v-2h2v-2h2v2h2v2h-2z'
      opacity={0.3}
    />
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-10H7v2h7v-2zm0-3H7v2h7V7zm-7 8h3v-2H7v2zm12-2v2h-2v2h-2v-2h-2v-2h2v-2h2v2h2z' />
  
    </svg>
  );
}