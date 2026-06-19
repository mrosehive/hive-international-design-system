import * as React from 'react';

/**
 * Slate-led button with restrained gold emphasis.
 * @startingPoint section="Core" subtitle="Primary / secondary / ghost button" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Visual style. Primary = gold fill (use sparingly). @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Optional node rendered before the label (e.g. an icon). */
  iconLeft?: React.ReactNode;
  /** Optional node rendered after the label. */
  iconRight?: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element;
