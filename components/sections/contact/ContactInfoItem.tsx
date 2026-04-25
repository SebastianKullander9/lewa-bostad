import { LucideIcon } from "lucide-react";

interface ContactInfoItemProps {
    Icon: LucideIcon;
    text: string[];
}

export default function ContactInfoItem({ Icon, text }: ContactInfoItemProps) {
    return (
        <div className="flex flex-row items-center gap-md">
            <div className="bg-tertiary text-surface bg-background inline-block p-md rounded-full">
                <Icon strokeWidth={1.8} size={22} />
            </div>
            <div>
                {text.map((str, index) => (
                    <p key={index} className="text-lg">
                        {str}
                    </p>
                ))}
            </div>
        </div>
    );
}
