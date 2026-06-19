import * as React from 'react';

/** Initials (or image) avatar on a charcoal disc with a hairline ring. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name; initials are derived from it. */
  name?: string;
  /** Optional image URL. */
  src?: string;
  /** Diameter in px. @default 40 */
  size?: number;
  /** Ring color. @default "hairline" */
  ring?: 'hairline' | 'gold';
}

export function Avatar(props: AvatarProps): React.JSX.Element;
