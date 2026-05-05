interface ConsentButtonProps {
    label: string;
    onClick: () => void;
}

export default function ConsentButton({ label, onClick }: ConsentButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="text-medium font-medium p-md text-surface bg-background w-1/2 hover:bg-background/90"
        >
            {label}
        </button>
    );
}
