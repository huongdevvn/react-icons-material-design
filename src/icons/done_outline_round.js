import React from 'react';

export default function IconDoneOutlineRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M20.47 5.63c.39.39.39 1.01 0 1.4L9.13 18.37a.984.984 0 0 1-1.4 0l-4.2-4.2a.984.984 0 0 1 0-1.4.984.984 0 0 1 1.4 0l3.5 3.5L19.07 5.63a.984.984 0 0 1 1.4 0zm-2.11-2.12-9.93 9.93-2.79-2.79c-.78-.78-2.05-.78-2.83 0l-1.4 1.4c-.78.78-.78 2.05 0 2.83l5.6 5.6c.78.78 2.05.78 2.83 0L22.59 7.74c.78-.78.78-2.05 0-2.83l-1.4-1.4c-.79-.78-2.05-.78-2.83 0z' />
  
    </svg>
  );
}