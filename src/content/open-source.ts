import type { ProjectLink } from './projects';

export interface CliCommand {
    command: string;
    // Shown after the command as a shell comment.
    note?: string;
}

/** One of the two moarch scaffolding CLIs: the app side or the API side. */
export interface ScaffoldTool {
    name: string;
    // Which end of an app the tool sets up, shown beside its name.
    target: string;
    summary: string;
    installCommand: string;
    commands: CliCommand[];
    // Short enough to read as tags.
    features: string[];
    links: ProjectLink[];
}

export const SCAFFOLD_TOOLS: ScaffoldTool[] = [
    {
        name: 'moarch',
        target: 'Flutter apps',
        summary:
            'Sets up a Flutter project with Clean Architecture and shared team conventions, then adds features to it layer by layer.',
        installCommand: 'dart pub global activate moarch',
        commands: [
            { command: 'moarch init', note: 'new project' },
            {
                command: 'moarch create feature auth',
                note: 'every layer + route',
            },
            { command: 'moarch doctor --fix', note: 'check the setup' },
        ],
        features: [
            'Riverpod or Bloc',
            'Dio or Firebase',
            'Flavors',
            'Models from JSON',
            'Offline-first sync',
            'Generated tests',
        ],
        links: [
            {
                label: 'pub.dev',
                href: 'https://pub.dev/packages/moarch',
                kind: 'pub',
            },
            {
                label: 'Source',
                href: 'https://github.com/SuperMoooo/moarch',
                kind: 'github',
            },
        ],
    },
    {
        name: 'moarch-py',
        target: 'FastAPI back ends',
        summary:
            'The same commands for the API: a modular-monolith FastAPI project on uv, async SQLAlchemy 2, Alembic and Pydantic v2.',
        installCommand: 'uv tool install moarch-py',
        commands: [
            { command: 'moarch-py init shop-api', note: 'new project' },
            {
                command: 'moarch-py create module orders',
                note: 'every layer + tests',
            },
            { command: 'uv run lint-imports', note: 'module boundaries hold' },
        ],
        features: [
            'PostgreSQL, MySQL, SQLite',
            'Alembic',
            'Enforced module boundaries',
            'Docker + CI',
            'Mock responses',
        ],
        links: [
            {
                label: 'PyPI',
                href: 'https://pypi.org/project/moarch-py/',
                kind: 'pypi',
            },
            {
                label: 'Source',
                href: 'https://github.com/SuperMoooo/moarch-py',
                kind: 'github',
            },
        ],
    },
];
