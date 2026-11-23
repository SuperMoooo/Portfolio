// Class names shared across sections, so every card, chip and button on the
// page has the same shape and the same hover behaviour.

/** A panel on the page background. Cards with links lighten their border on hover. */
export const cardClass = 'rounded-2xl border border-edge bg-surface';
export const interactiveCardClass = `${cardClass} transition-colors hover:border-lilac/40`;

/** A small tag: a technology, a feature, an employment type. */
export const chipClass = 'rounded-md border border-edge bg-surface-raised px-2 py-0.5 text-xs text-muted';

export type Emphasis = 'primary' | 'secondary';

// No padding here: text buttons add px-4, icon buttons a fixed width. Putting
// both px-4 and px-0 on one element lets Tailwind's CSS order pick the winner,
// which squeezed the icons.
const BUTTON_BASE =
    'inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors';

const BUTTON_EMPHASIS: Record<Emphasis, string> = {
    primary: 'bg-lilac text-base hover:bg-lilac-light',
    secondary: 'border border-edge bg-surface text-fg hover:border-lilac/50',
};

/** Class names for a link styled as a button. */
export function buttonClass(emphasis: Emphasis) {
    return `${BUTTON_BASE} px-4 ${BUTTON_EMPHASIS[emphasis]}`;
}

/** A square icon-only button (GitHub, LinkedIn, email). Needs an aria-label. */
export const iconButtonClass = `${BUTTON_BASE} w-11 ${BUTTON_EMPHASIS.secondary}`;
