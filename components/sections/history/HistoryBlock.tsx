interface HistoryBlockProps {
    year: string;
    title: string;
    text: string;
    isLast?: boolean;
}

export default function HistoryBlock({ year, title, text, isLast }: HistoryBlockProps) {
    return (
        <div className="flex gap-sm">
            <div className={`flex flex-col items-center ${!isLast && "h-50"}`}>
                <div className="w-6 h-6 bg-surface rounded-full" />
                {!isLast && <div className="w-px flex-1 bg-surface opacity-20 my-4" />}
            </div>

            <div className="flex flex-row gap-3xl">
                <p className="text-base">{year}</p>
                <div className="flex flex-col gap-xs -mt-0.5">
                    <p className="text-3xl font-extrabold">{title}</p>
                    <p className="max-w-[35ch] text-lg">{text}</p>
                </div>
            </div>
        </div>
    );
}
