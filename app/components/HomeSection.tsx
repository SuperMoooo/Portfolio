import CV_Button from './CV_Button';
import { SOCIALS } from './Navbar';

export default function HomeSection() {
    return (
        <section id="top" className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
            <p className="fade-up text-nonPrimaryText">André Montoito</p>
            <h1 className="fade-up mt-3 max-w-3xl text-4xl font-medium leading-tight tracking-tight [animation-delay:100ms] sm:text-6xl">
                Mobile Engineer & Backend Developer
            </h1>
            <p className="fade-up mt-6 max-w-xl text-nonPrimaryText [animation-delay:200ms] sm:text-lg">
                Based in Portugal.
            </p>
            <div className="fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm [animation-delay:300ms]">
                <CV_Button file="ANDRE_MONTOITO_CV_EN.pdf" lang="en" />
                <CV_Button file="ANDRE_MONTOITO_CV_PT.pdf" lang="pt" />
                <a href={`mailto:${SOCIALS.email}`} className="text-nonPrimaryText underline-offset-4 transition-colors hover:text-white hover:underline">
                    {SOCIALS.email}
                </a>
            </div>
        </section>
    );
}
