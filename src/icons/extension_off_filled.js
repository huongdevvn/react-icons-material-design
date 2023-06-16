import React from 'react';

export default function IconExtensionOffFilled({ size = '1em', color = 'currentColor', ...restProps }) {
  return (
    <svg
     xmlns='http://www.w3.org/2000/svg'
     width={size}
     height={size}
     viewBox='0 0 24 24'
     fill={color}
     {...restProps}
    >
      
    <path d='m19.78 22.61-1.63-1.63c-.05 0-.1.02-.15.02h-3.8c0-2.71-2.16-3-2.7-3s-2.7.29-2.7 3H5c-1.1 0-2-.9-2-2v-3.8c2.71 0 3-2.16 3-2.7s-.3-2.7-2.99-2.7V6c0-.05.02-.09.02-.14L1.39 4.22 2.8 2.81l18.38 18.38-1.4 1.42zm.22-5.44V15a2.5 2.5 0 0 0 0-5V6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H6.83L20 17.17z' />
  
    </svg>
  );
}