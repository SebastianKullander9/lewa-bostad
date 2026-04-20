interface KeyFigureProps {
    value: string;
    title: string;
    suffix: string;
}

export default function KeyFigure({ value, title, suffix }: KeyFigureProps) {
    return (
        <div className="text-center flex flex-col gap-sm">
            <div className="flex flex-row items-end justify-center gap-xs">
                <p className="text-4xl font-semibold">{value}</p>
                <p className="text-xl">{suffix}</p>
            </div>
            <div className="border-b border-border"></div>
            <p className="text-surface-muted text-sm">{title}</p>
        </div>
    );
}
