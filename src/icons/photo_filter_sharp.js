import React from 'react';

export default function IconPhotoFilterSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M19 10v9H4.98V5h9V3H3v18h18V10h-2zm-2 0 .94-2.06L20 7l-2.06-.94L17 4l-.94 2.06L14 7l2.06.94L17 10zm-3.75.75L12 8l-1.25 2.75L8 12l2.75 1.25L12 16l1.25-2.75L16 12l-2.75-1.25z' />
  
    </svg>
  );
}