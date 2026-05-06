import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
    label: string;
    className?: string;
    noBackground?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

export default function PrimaryButton({
    label,
    className,
    noBackground = false,
    disabled = false,
    loading = false,
}: PrimaryButtonProps) {
    return (
        <div
            className={cn(
                "px-4 py-2 md:py-1.5 rounded-full relative group overflow-hidden cursor-pointer flex items-center justify-center",
                noBackground ? "bg-surface text-background" : "bg-background text-surface",
                disabled && "opacity-50 cursor-not-allowed",
                className,
            )}
        >
            {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-surface border-t-transparent animate-spin" />
            ) : (
                <p className="text-small">{label}</p>
            )}
            {!disabled && (
                <span className="absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-550 ease-in-out bg-linear-to-r from-transparent via-white/18 to-transparent" />
            )}
        </div>
    );
}
