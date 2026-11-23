'use client';
import { useState } from 'react';

// How long "Copied" stays before the button goes back to "Copy".
const CONFIRMATION_MS = 1500;

/** Copies a terminal command to the clipboard and confirms it in place. */
export default function CopyButton({ text }: { text: string }) {
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
            className={`min-h-[44px] min-w-[4.25rem] shrink-0 rounded-md border px-2.5 font-sans text-xs font-semibold transition-colors ${
                hasCopied ? 'border-lilac/50 text-lilac' : 'border-edge text-muted hover:border-lilac/50 hover:text-fg'
            }`}
        >
            <span aria-live="polite">{hasCopied ? 'Copied' : 'Copy'}</span>
        </button>
    );
}
