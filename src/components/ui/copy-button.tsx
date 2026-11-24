'use client';
import { useState } from 'react';
import { cn } from '@/lib/class-names';

// How long "Copied" stays before the button goes back to "Copy".
const CONFIRMATION_MS = 1500;

/** Copies a terminal command to the clipboard and confirms it in place. */
export function CopyButton({ text }: { text: string }) {
    const [hasCopied, setHasCopied] = useState(false);

    const copyText = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setHasCopied(true);
            setTimeout(() => setHasCopied(false), CONFIRMATION_MS);
        } catch {
            // Clipboard access is blocked outside secure contexts; the command
            // is still on screen to select by hand.
        }
    };

    return (
        <button
            type="button"
            onClick={copyText}
            aria-label={hasCopied ? 'Copied' : `Copy “${text}”`}
            className={cn(
                'min-h-[44px] min-w-[4.25rem] shrink-0 rounded-tag border px-2.5 font-sans text-xs font-semibold transition-colors',
                hasCopied ? 'border-accent/60 text-accent' : 'border-line text-ink-muted hover:border-accent/60 hover:text-ink'
            )}
        >
            <span aria-live="polite">{hasCopied ? 'Copied' : 'Copy'}</span>
        </button>
    );
}
