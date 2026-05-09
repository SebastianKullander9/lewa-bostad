import { cn } from "@/lib/utils";

interface InputProps {
    placeholder: string;
}

export default function InputDark({ placeholder }: InputProps) {
    return (
        <input
            className={cn(
                "py-2 px-4 rounded-lg w-full",
                "bg-surface  text-background border border-background/35",
                "hover:bg-white hover:border-background",
                "focus:bg-white focus:outline-none focus:border-background",
                "transition-colors duration-300",
            )}
            type="text"
            name="test"
            required
            placeholder={placeholder}
        />
    );
}
