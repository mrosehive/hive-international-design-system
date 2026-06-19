import * as React from 'react';

/** Compact status/category pill in the low-saturation Hive palette. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'accent' | 'success' | 'danger' | 'info';
  /** Filled rather than tinted. @default false */
  solid?: boolean;
}

export function Badge(props: BadgeProps): React.JSX.Element;
