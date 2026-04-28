interface PrimaryButtonProps {
    label: string;
    className?: string;
}

export default function PrimaryButton({ label, className }: PrimaryButtonProps) {
    return (
        <div
            className={`bg-background text-surface px-4 py-2 rounded-full relative group overflow-hidden cursor-pointer ${className}`}
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
