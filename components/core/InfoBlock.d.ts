import * as React from 'react';

/** Titled panel with a 3px left-accent rule for guidance and callouts. */
export interface InfoBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional Bebas title line. */
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Accent rule color. @default "gold" */
  accent?: 'gold' | 'silver';
}

export function InfoBlock(props: InfoBlockProps): React.JSX.Element;
