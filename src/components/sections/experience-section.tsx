import { EDUCATION, SPOKEN_LANGUAGES } from '@/content/experience';
import { Section } from '@/components/ui/section';
import { Tile } from '@/components/ui/tile';
import { ExperienceTabs } from './experience-tabs';

function EducationTile() {
    return (
        <Tile className="p-5 sm:p-6">
            <h3 className="font-semibold">Education</h3>
            <ol className="mt-4 flex flex-col gap-4">
                {EDUCATION.map((item) => (
                    <li key={item.degree}>
                        <p className="text-sm font-medium">{item.degree}</p>
                        <p className="mt-0.5 text-xs text-ink-muted">
                            {item.school}, <span className="tabular-nums">{item.period}</span>
                        </p>
                    </li>
                ))}
            </ol>
        </Tile>
    );
}

function LanguagesTile() {
    return (
        <Tile className="p-5 sm:p-6">
            <h3 className="font-semibold">Languages</h3>
            <dl className="mt-4 flex flex-col gap-2 text-sm">
                {SPOKEN_LANGUAGES.map((language) => (
                    <div key={language.name} className="flex justify-between gap-4">
                        <dt>{language.name}</dt>
                        <dd className="text-ink-muted">{language.level}</dd>
                    </div>
                ))}
            </dl>
        </Tile>
    );
}

/** Jobs as tabs in a wide tile, with education and languages stacked beside it. */
export function ExperienceSection() {
    return (
        <Section id="experience" title="Experience" intro="Client apps, mostly in Flutter, built part-time alongside my degree.">
            <div className="grid gap-4 lg:grid-cols-12">
                <Tile className="lg:col-span-8">
                    <ExperienceTabs />
                </Tile>
                <div className="flex flex-col gap-4 lg:col-span-4">
                    <EducationTile />
                    <LanguagesTile />
                </div>
            </div>
        </Section>
    );
}
