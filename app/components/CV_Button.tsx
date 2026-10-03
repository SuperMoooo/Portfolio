import { publicFile } from '../constants/paths';
import { DownloadIcon } from './Icons';

interface CVButtonProps {
    file: string;
    lang: string;
}

export default function CV_Button({ file, lang }: CVButtonProps) {
    return (
        <a
            href={publicFile(`cvs/${file}`)}
            download
            className="inline-flex min-h-[44px] items-center gap-2 text-white underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
            <DownloadIcon className="h-4 w-4" />
            CV ({lang.toUpperCase()})
        </a>
    );
}
