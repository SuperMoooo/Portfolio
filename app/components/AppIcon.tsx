import type { MobileApp } from '../constants/Projects';

// Crops the app logo out of its store banner so it can be shown as an app icon.
export default function AppIcon({ app, className = 'h-14 w-14' }: { app: MobileApp; className?: string }) {
    return (
        <span
            role="img"
            aria-label={`${app.title} icon`}
            className={`block shrink-0 rounded-[22%] bg-no-repeat ring-1 ring-white/10 ${className}`}
            style={{
                backgroundImage: `url(${app.img.src})`,
                backgroundSize: app.icon.zoom === 100 ? 'cover' : `${app.icon.zoom}% auto`,
                backgroundPosition: `${app.icon.x}% ${app.icon.y}%`,
            }}
        />
    );
}
