import { ComponentType, SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
}

interface ContactInfoItemProps {
    Icon: ComponentType<IconProps>;
    text: string[];
}

export default function ContactInfoItem({ Icon, text }: ContactInfoItemProps) {
    return (
        <div className="flex flex-row items-center gap-md">
            <div className="bg-tertiary text-surface bg-background inline-block p-sm lg:p-md rounded-full">
                <Icon size={22} className="scale-80 lg:scale-100" />
            </div>
            <div>
                {text.map((str, index) => (
                    <p key={index} className="text-large">
                        {str}
                    </p>
                ))}
            </div>
        </div>
    );
}
