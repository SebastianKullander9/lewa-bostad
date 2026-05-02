interface PrimaryButtonProps {
    label: string;
    className?: string;
    noBackground?: boolean;
}

export default function PrimaryButton({
    label,
    className,
    noBackground = false,
}: PrimaryButtonProps) {
    return (
        <div
            className={`${noBackground ? "bg-surface text-background" : "bg-background text-surface"}
			 px-4 py-2 md:py-1.5 rounded-full relative group overflow-hidden cursor-pointer flex items-center justify-center ${className}`}
        >
            <p className="text-small">{label}</p>
            <span
                className="
				absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-550 
				ease-in-out bg-linear-to-r from-transparent via-white/18 to-transparent
				"
            />
        </div>
    );
}
