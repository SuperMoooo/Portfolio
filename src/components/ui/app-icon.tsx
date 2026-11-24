import type { PublishedApp } from '@/content/projects';
import { cn } from '@/lib/class-names';

interface AppIconProps {
    app: PublishedApp;
    className?: string;
}

/** Crops the app logo out of its store banner so it can be shown as an app icon. */
export function AppIcon({ app, className = 'h-14 w-14' }: AppIconProps) {
    const { x, y, zoom } = app.iconCrop;

    return (
        <span
            role="img"
            aria-label={`${app.title} icon`}
            // 22% radius approximates the rounded-square mask phones put on app icons.
            className={cn('block shrink-0 rounded-[22%] bg-no-repeat ring-1 ring-ink/10', className)}
            style={{
                backgroundImage: `url(${app.banner.src})`,
                backgroundSize: zoom === 100 ? 'cover' : `${zoom}% auto`,
                backgroundPosition: `${x}% ${y}%`,
            }}
        />
    );
}
