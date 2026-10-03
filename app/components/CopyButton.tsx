'use client';
import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // Clipboard can be blocked (e.g. insecure context); nothing to do.
        }
    };

    return (
        <button
            type="button"
            onClick={copy}
            className="min-h-[36px] shrink-0 rounded-lg border border-white/15 px-3 text-xs text-nonPrimaryText transition-colors hover:text-white active:scale-95"
        >
            {copied ? 'Copied ✓' : 'Copy'}
        </button>
    );
}
