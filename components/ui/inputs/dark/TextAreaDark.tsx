import { cn } from "@/lib/utils";

interface TextAreaProps {
    placeholder: string;
    rows?: number;
}

export default function TextAreaDark({ placeholder, rows }: TextAreaProps) {
    return (
        <textarea
            className={cn(
                "w-full rounded-lg px-4 py-3",
                "bg-surface text-background border border-background/35",
                "hover:bg-white hover:border-background",
                "focus:bg-white focus:outline-none focus:border-background",
                "transition-colors duration-300",
            )}
            rows={rows}
            placeholder={placeholder}
        />
    );
}
