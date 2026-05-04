interface HistoryBlockProps {
    year: string;
    title: string;
    text: string;
    icon?: React.ReactNode;
    isLast?: boolean;
}

export default function HistoryBlock({ year, title, text, icon, isLast }: HistoryBlockProps) {
    return (
        <div className="flex gap-sm">
            <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                    {icon ?? <div className="w-2 h-2 bg-background text-background rounded-full" />}
                </div>
                {!isLast && <div className="w-px flex-1 bg-surface opacity-20 my-3" />}
            </div>
            <div className={`flex flex-col gap-xs ${!isLast ? "pb-10" : ""}`}>
                <p className="eyebrow opacity-60">{year}</p>
                <p className="text-xl font-bold">{title}</p>
                <p className="max-w-[35ch] text-medium opacity-80">{text}</p>
            </div>
        </div>
    );
}
