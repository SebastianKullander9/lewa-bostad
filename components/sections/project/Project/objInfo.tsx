interface ObjInfoProps {
    title: string;
    value: string;
    Icon: React.ComponentType<{
        className?: string;
        style?: React.CSSProperties;
        size?: string;
    }>;
}

export default function ObjInfo({ title, value, Icon }: ObjInfoProps) {
    return (
        <div className="inline-flex flex-row items-center gap-sm">
            <div className="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 text-[var(--color-olive-400)]">
                <Icon size="100%" />
            </div>
            <div className="-space-y-1.5">
                <p className="uppercase text-small">{title}</p>
                <p className="font-medium text-medium">{value}</p>
            </div>
        </div>
    );
}
