import type { ComponentProps } from 'react';
import { cn } from '@/lib/class-names';

// The "on-accent" pair is for buttons sitting on the wisteria contact band,
// where the normal primary button would vanish into the background.
export type ButtonVariant = 'primary' | 'secondary' | 'primary-on-accent' | 'secondary-on-accent';
export type ButtonShape = 'text' | 'icon';

// The base has no horizontal padding: the shape adds it. Putting both px-4 and
// a fixed width on one element would leave Tailwind's CSS order to pick the
// winner, which once squeezed the icon buttons.
const BASE =
    'inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-control text-sm font-semibold transition-colors';

const VARIANTS: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-accent-ink hover:bg-accent-hover',
    // A translucent ink border reads on the page and on tiles alike.
    secondary: 'border border-ink/15 text-ink hover:border-accent/70 hover:text-accent',
    'primary-on-accent': 'bg-accent-ink text-accent hover:bg-accent-ink/85',
    'secondary-on-accent': 'border border-accent-ink/25 text-accent-ink hover:border-accent-ink/70',
};

const SHAPES: Record<ButtonShape, string> = {
    text: 'px-4',
    icon: 'w-11',
};

/** Class names for anything styled as a button: a link, or a `<summary>` toggle. */
export function buttonStyles(variant: ButtonVariant = 'secondary', shape: ButtonShape = 'text') {
    return cn(BASE, VARIANTS[variant], SHAPES[shape]);
}

interface ButtonLinkProps extends ComponentProps<'a'> {
    variant?: ButtonVariant;
    shape?: ButtonShape;
    // Opens in a new tab. Off for mailto links and file downloads.
    isExternal?: boolean;
}

/** A link that looks like a button. Every button on this site navigates, so there is no `<button>` variant. */
export function ButtonLink({ variant, shape, isExternal = false, className, ...linkProps }: ButtonLinkProps) {
    return (
        <a
            {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
            className={cn(buttonStyles(variant, shape), className)}
            {...linkProps}
        />
    );
}
