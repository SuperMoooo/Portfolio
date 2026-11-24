/** Joins class names, skipping the falsy ones, so a component can add classes conditionally. */
export function cn(...classNames: Array<string | false | null | undefined>) {
    return classNames.filter(Boolean).join(' ');
}
