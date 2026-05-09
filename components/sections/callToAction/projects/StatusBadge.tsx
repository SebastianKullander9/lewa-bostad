import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <p
            className={cn(
                "absolute py-xs px-lg rounded-full",
                "text-xs text-white bg-surface/20 backdrop-blur-sm",
                "bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-4 lg:right-4",
            )}
        >
            {status}
        </p>
    );
}
