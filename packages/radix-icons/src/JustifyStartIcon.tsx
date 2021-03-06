import * as React from 'react';
import { IconProps } from './types';

export const JustifyStartIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M1.05005 13.5004C1.05005 13.749 1.25152 13.9504 1.50005 13.9504C1.74858 13.9504 1.95005 13.749 1.95005 13.5004L1.95005 1.50044C1.95005 1.25191 1.74858 1.05044 1.50005 1.05044C1.25152 1.05044 1.05005 1.25191 1.05005 1.50044L1.05005 13.5004ZM11 9L4.00002 9L4.00002 6L11 6L11 9ZM3.75002 10C3.33581 10 3.00002 9.66421 3.00002 9.25L3.00002 5.75C3.00002 5.33579 3.33581 5 3.75002 5L11.25 5C11.6642 5 12 5.33579 12 5.75L12 9.25C12 9.66421 11.6642 10 11.25 10L3.75002 10Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default JustifyStartIcon;
