interface TextAreaProps {
    placeholder: string;
    rows?: number;
}

export default function TextAreaLight({ placeholder, rows = 5 }: TextAreaProps) {
    return (
        <textarea
            className="
				bg-white text-background w-full rounded-lg px-4 py-3 transition-colors duration-300
				hover:bg-white 
				focus:bg-white focus:outline-none
			"
            rows={rows}
            placeholder={placeholder}
        />
    );
}
