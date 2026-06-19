import * as React from 'react';

/**
 * Charcoal panel on slate — the brand's default container.
 * @startingPoint section="Core" subtitle="Card with optional gold accent + hex texture" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** Add the signature 3px gold left-rule. @default false */
  accent?: boolean;
  /** Overlay the faint honeycomb mesh (avoid behind dense text). @default false */
  hexTexture?: boolean;
  /** Hover lift + border warm. @default false */
  interactive?: boolean;
  /** CSS padding. @default "24px" */
  padding?: string;
}

export function Card(props: CardProps): React.JSX.Element;
