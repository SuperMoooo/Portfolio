import { SCAFFOLD_TOOLS, type ScaffoldTool } from '../constants/Projects';
import CopyButton from './CopyButton';
import LinkButton from './LinkButton';
import SectionHeading from './SectionHeading';
import { cardClass, chipClass } from './styles';

const PROMPT = <span className="select-none text-lilac">$ </span>;

/** A tool's install line (copyable) and its main commands, as a terminal. */
function Terminal({ tool }: { tool: ScaffoldTool }) {
    return (
        <div className="overflow-hidden rounded-xl border border-edge bg-base font-mono text-[13px] leading-relaxed">
            <div className="flex items-center justify-between gap-3 border-b border-edge bg-surface-raised py-1 pl-4 pr-1.5">
                {/* min-w-0 lets a long install line scroll instead of widening the card. */}
                <code className="min-w-0 overflow-x-auto whitespace-nowrap">
                    {PROMPT}
                    {tool.install}
                </code>
                <CopyButton text={tool.install} />
            </div>
            <ul className="flex flex-col gap-1.5 p-4">
                {tool.commands.map(({ cmd, note }) => (
                    <li key={cmd} className="overflow-x-auto whitespace-nowrap">
                        <code>
                            {PROMPT}
                            {cmd}
                        </code>
                        {note && <span className="text-muted"> # {note}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ScaffoldToolCard({ tool }: { tool: ScaffoldTool }) {
    return (
        // Grid items default to min-width: auto, which would let an unwrapped
        // command stretch the column past the screen; min-w-0 stops that.
        <article className={`${cardClass} flex min-w-0 flex-col p-5 sm:p-6`}>
            <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-mono text-xl font-medium">{tool.name}</h3>
                <span className="rounded-md bg-lilac/10 px-2 py-0.5 text-xs font-medium text-lilac ring-1 ring-lilac/20">
                    for {tool.target}
                </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{tool.summary}</p>

            <div className="mt-5">
                <Terminal tool={tool} />
            </div>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="What a new project gets">
                {tool.features.map((feature) => (
                    <li key={feature} className={chipClass}>
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {tool.links.map((link, index) => (
                    <LinkButton key={link.href} link={link} emphasis={index === 0 ? 'primary' : 'secondary'} />
                ))}
            </div>
        </article>
    );
}

/** moarch (Flutter) and moarch-py (FastAPI) side by side: one CLI for each end of an app. */
export default function OpenSourceSection() {
    return (
        <section className="mx-auto max-w-page px-4 py-12 sm:px-6 md:py-16">
            <SectionHeading
                id="open-source"
                title="Open source"
                intro="Two CLIs I wrote and publish, one for each end of an app. Same commands on both: init makes the project, create adds to it."
            />
            <div className="grid gap-4 lg:grid-cols-2">
                {SCAFFOLD_TOOLS.map((tool) => (
                    <ScaffoldToolCard key={tool.name} tool={tool} />
                ))}
            </div>
        </section>
    );
}
