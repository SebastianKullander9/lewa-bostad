interface KeyFigureProps {
    value: string;
    title: string;
    suffix: string;
}

export default function KeyFigure({ value, title, suffix }: KeyFigureProps) {
    return (
        <div className="flex flex-col gap-xs">
            <p className="heading-primary text-surface">
                {value}
                <span className="text-2xl eyebrow ml-1 ">{suffix}</span>
            </p>
            <p className="text-surface-muted text-xs uppercase tracking-widest">{title}</p>
        </div>
    );
}
