import * as React from 'react';

/** Slate text field; hairline border warms to gold on focus. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  /** Uppercase field label. */
  label?: string;
  /** Helper or error text beneath the field. */
  helper?: string;
  /** Render in the danger state. @default false */
  error?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): React.JSX.Element;
