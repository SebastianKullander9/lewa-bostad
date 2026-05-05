import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": ["text-small", "text-medium", "text-large", "text-extralarge"],
            gap: ["gap-small", "gap-base", "gap-large"],
        },
    },
});

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
