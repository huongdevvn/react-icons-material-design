import React from 'react';

export default function IconArrowDropDownCircleRound({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.35 12.65-2.79-2.79c-.32-.32-.1-.86.35-.86h5.59c.45 0 .67.54.35.85l-2.79 2.79c-.2.2-.52.2-.71.01z' />
  
    </svg>
  );
}