import React from 'react';

export default function IconCo2Round({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M14 9h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-.5 4.5h-2v-3h2v3zm7 2h-2v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H18c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1h-2.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.75c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zM8 14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v.25c0 .41-.34.75-.75.75a.76.76 0 0 1-.71-.5H4.5v3h2.04c.1-.29.38-.5.71-.5.41 0 .75.34.75.75V14z' />
  
    </svg>
  );
}