import { SCAFFOLD_TOOLS, type ScaffoldTool } from '@/content/open-source';
import { CopyButton } from '@/components/ui/copy-button';
import { ProjectLinkButton } from '@/components/ui/project-link-button';
import { Section } from '@/components/ui/section';
import { TagList } from '@/components/ui/tag-list';
import { Tile } from '@/components/ui/tile';

/** The shell prompt before each command. Not selectable, so copying a line copies only the command. */
function Prompt() {
    return <span className="select-none text-accent">$ </span>;
}

/** A tool's install line (copyable) and its main commands, as a terminal. */
function Terminal({ tool }: { tool: ScaffoldTool }) {
    return (
        <div className="min-w-0 overflow-hidden rounded-control bg-canvas font-mono text-code">
            <div className="flex items-center justify-between gap-3 border-b border-line py-1 pl-4 pr-1.5">
                {/* min-w-0 lets a long install line scroll instead of widening the tile. */}
                <code className="min-w-0 overflow-x-auto whitespace-nowrap">
                    <Prompt />
                    {tool.installCommand}
                </code>
                <CopyButton text={tool.installCommand} />
            </div>
            <ul className="flex flex-col gap-3 p-4">
                {tool.commands.map(({ command, note }) => (
                    // The comment goes on the line above, as in a shell script: an
                    // inline comment would wrap on some lines and not others.
                    <li key={command} className="flex flex-col">
                        {note && <span className="text-ink-muted"># {note}</span>}
                        <code className="overflow-x-auto whitespace-nowrap">
                            <Prompt />
                            {command}
                        </code>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/** One CLI: name and links on top, what it does, its terminal, then what a new project gets. */
function ScaffoldToolTile({ tool }: { tool: ScaffoldTool }) {
    return (
        // min-w-0: grid items default to min-width: auto, which would let an
        // unwrapped command stretch the column past the screen.
        <Tile as="article" className="flex min-w-0 flex-col gap-5 p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <h3 className="font-mono text-heading font-medium">{tool.name}</h3>
                    <p className="text-sm text-ink-muted">for {tool.target}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tool.links.map((link, index) => (
                        <ProjectLinkButton key={link.href} link={link} variant={index === 0 ? 'primary' : 'secondary'} />
                    ))}
                </div>
            </div>
            <p className="text-ink-muted">{tool.summary}</p>
            <Terminal tool={tool} />
            <TagList tags={tool.features} label="What a new project gets" />
        </Tile>
    );
}

/** moarch (Flutter) and moarch-py (FastAPI) side by side: one CLI for each end of an app. */
export function OpenSourceSection() {
    return (
        <Section
            id="open-source"
            title="Open source"
            intro="Two CLIs I wrote and publish, one for each end of an app. Same commands on both: init makes the project, create adds to it."
        >
            <div className="grid gap-4 lg:grid-cols-2">
                {SCAFFOLD_TOOLS.map((tool) => (
                    <ScaffoldToolTile key={tool.name} tool={tool} />
                ))}
            </div>
        </Section>
    );
}
