import React from 'react';

export default function IconNoLuggageRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20.49 20.49 3.51 3.51A.996.996 0 1 0 2.1 4.92l2.92 2.92c0 .06-.02.11-.02.16v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h6c0 .55.45 1 1 1s1-.45 1-1c.34 0 .65-.09.93-.24l1.14 1.14c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41zM8.75 18c-.41 0-.75-.34-.75-.75v-6.42l1.5 1.5v4.92c0 .41-.34.75-.75.75zM12 18c-.41 0-.75-.34-.75-.75v-3.17l1.5 1.5v1.67c0 .41-.34.75-.75.75zm0-9c.41 0 .75.34.75.75v.17l1.75 1.75V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.42l3 3V8c0-1.1-.9-2-2-2h-2V3c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v3h-.17l3.03 3.03c.05-.01.09-.03.14-.03zm-1.5-5.5h3V6h-3V3.5z' />
  
    </svg>
  );
}