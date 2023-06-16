import React from 'react';

export default function IconCalendarViewDayFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z' />
  
    </svg>
  );
}