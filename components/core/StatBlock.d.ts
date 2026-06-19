import * as React from 'react';

/** Large gold Bebas numeral over an uppercase label — the "By the Numbers" metric. */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "40+", "97%". */
  value: React.ReactNode;
  /** Uppercase label, e.g. "Countries Served". */
  label: React.ReactNode;
  /** Optional supporting line beneath the label. */
  detail?: React.ReactNode;
  /** Gold left-divider for multi-column stat rows. @default false */
  divider?: boolean;
  /** @default "left" */
  align?: 'left' | 'center';
}

export function StatBlock(props: StatBlockProps): React.JSX.Element;
