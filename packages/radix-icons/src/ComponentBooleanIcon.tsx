import * as React from 'react';
import { IconProps } from './types';

export const ComponentBooleanIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M7.8537 1.4896C7.65844 1.29434 7.34186 1.29434 7.14659 1.4896L1.48974 7.14645C1.29448 7.34172 1.29448 7.6583 1.48974 7.85356L7.14659 13.5104C7.34186 13.7057 7.65844 13.7057 7.8537 13.5104L13.5106 7.85356C13.7058 7.6583 13.7058 7.34172 13.5106 7.14645L7.8537 1.4896ZM7.50003 2.55038L2.5504 7.50001L7.50003 12.4496V2.55038Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ComponentBooleanIcon;
