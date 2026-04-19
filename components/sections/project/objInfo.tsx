import { LucideIcon } from "lucide-react";

interface ObjInfoProps {
    title: string;
    value: string;
    Icon: LucideIcon;
}

export default function ObjInfo({ title, value, Icon }: ObjInfoProps) {
    return (
        <div className="inline-flex flex-row items-center gap-sm">
            <Icon size={36} strokeWidth={1.25} className="text-[var(--color-olive-400)]" />
            <div className="-space-y-1.5">
                <p className="uppercase text-sm">{title}</p>
                <p className="font-medium text-lg">{value}</p>
            </div>
        </div>
    );
}
