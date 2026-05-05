import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    label: string;
}

export default function StatusBadge({ label }: StatusBadgeProps) {
    return (
        <p
            className={cn(
                "absolute py-xs px-lg rounded-full",
                "text-small text-text-secondary bg-surface",
                "top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4",
            )}
        >
            {label}
        </p>
    );
}
