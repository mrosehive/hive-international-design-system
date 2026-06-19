import * as React from 'react';

/** Squared chip for capabilities, NAICS codes, contract vehicles, filters. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Selected/active state (gold). @default false */
  active?: boolean;
  /** Provide to make the tag interactive (filter/toggle). */
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export function Tag(props: TagProps): React.JSX.Element;
