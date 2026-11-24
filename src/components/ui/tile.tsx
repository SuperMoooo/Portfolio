import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/class-names';

type TileElement = 'div' | 'article' | 'li';

// HTMLAttributes rather than the div's full props: those include a div-typed
// ref, which TypeScript rejects when the tile renders as an <li>. Tiles never need a ref.
interface TileProps extends HTMLAttributes<HTMLElement> {
    // The element to render, so a tile can be a list item or an article where that is what it is.
    as?: TileElement;
}

/** One cell of a section's grid: a rounded panel a step lighter than the page. Padding is the caller's. */
export function Tile({ as: Element = 'div', className, ...tileProps }: TileProps) {
    return <Element className={cn('rounded-card bg-surface', className)} {...tileProps} />;
}
