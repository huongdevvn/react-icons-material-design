import React from 'react';

export default function IconCalendarViewMonthSharp({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M22 4H2v16h20V4zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z' />
  
    </svg>
  );
}