import { EDUCATION, SPOKEN_LANGUAGES } from '@/content/experience';
import { Section } from '@/components/ui/section';
import { Tile } from '@/components/ui/tile';
import { ExperienceTabs } from './experience-tabs';

function EducationList() {
    return (
        <div>
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
        </div>
    );
}

function LanguagesList() {
    return (
        <div>
            <h3 className="font-semibold">Languages</h3>
            <dl className="mt-4 flex max-w-xs flex-col gap-2 text-sm">
                {SPOKEN_LANGUAGES.map((language) => (
                    <div key={language.name} className="flex justify-between gap-4">
                        <dt>{language.name}</dt>
                        <dd className="text-ink-muted">{language.level}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}

/**
 * Jobs as tabs in a full-width tile, then education and languages below as
 * plain columns: they are a few lines of facts, not things to frame in a tile.
 */
export function ExperienceSection() {
    return (
        <Section id="experience" title="Experience" intro="Client apps, mostly in Flutter, built part-time alongside my degree.">
            <Tile>
                <ExperienceTabs />
            </Tile>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12">
                <EducationList />
                <LanguagesList />
            </div>
        </Section>
    );
}
