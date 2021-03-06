import * as React from 'react';
import { IconProps } from './types';

export const LockClosedIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M5 4.63604C5 3.76034 5.24219 3.10543 5.64323 2.6736C6.03934 2.24709 6.64582 1.97833 7.5014 1.97833C8.35745 1.97833 8.96306 2.24655 9.35823 2.67211C9.75838 3.10302 10 3.75711 10 4.63328V6.00002H5V4.63604ZM4 6.00002V4.63604C4 3.58151 4.29339 2.65757 4.91049 1.9931C5.53252 1.32332 6.42675 0.978333 7.5014 0.978333C8.57583 0.978333 9.46952 1.32236 10.091 1.99165C10.7076 2.6556 11 3.57899 11 4.63328V6.00002H12C12.5523 6.00002 13 6.44774 13 7.00002V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V7.00002C2 6.44774 2.44772 6.00002 3 6.00002H4ZM3 7.00002H12V13H3V7.00002Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LockClosedIcon;
