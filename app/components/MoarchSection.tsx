import { MOARCH } from '../constants/Projects';
import CopyButton from './CopyButton';
import LinkButton from './LinkButton';
import SectionHeading from './SectionHeading';

export default function MoarchSection() {
    return (
        <section id="moarch" className="scroll-mt-20">
            <SectionHeading eyebrow="02 · Open source" title="moarch" desc={MOARCH.tagline + '.'} />

            <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
                <div className="flex flex-col gap-5 rounded-[1.25rem] border border-white/10 bg-secondBg p-5 sm:p-6">
                    <p className="text-nonPrimaryText">{MOARCH.desc}</p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                        {MOARCH.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#54c5f8]" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2">
                        {MOARCH.links.map((link, i) => (
                            <LinkButton key={link.href} link={link} primary={i === 0} />
                        ))}
                    </div>
                </div>

                <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0d1117] font-mono text-[13px]">
                    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3" aria-hidden="true">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                        <span className="ml-3 text-xs text-nonPrimaryText">~/my_app</span>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                        <code className="overflow-x-auto whitespace-nowrap text-[#54c5f8]">
                            <span className="select-none text-nonPrimaryText">$ </span>
                            {MOARCH.install}
                        </code>
                        <CopyButton text={MOARCH.install} />
                    </div>
                    <ul className="space-y-3 p-4">
                        {MOARCH.commands.map(({ cmd, note }) => (
                            <li key={cmd} className="overflow-x-auto whitespace-nowrap">
                                <span className="select-none text-nonPrimaryText">$ </span>
                                <span className="text-white">{cmd}</span>
                                {note && <span className="text-[#6e7681]"> # {note}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
