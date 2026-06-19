import * as React from 'react';

/** Tracked uppercase micro-label with the signature thin gold rule beneath. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Show the 40px gold rule. @default true */
  rule?: boolean;
}

export function Eyebrow(props: EyebrowProps): React.JSX.Element;
