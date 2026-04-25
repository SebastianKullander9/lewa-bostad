interface TextAreaProps {
    placeholder: string;
}

export default function TextAreaDark({ placeholder }: TextAreaProps) {
    return (
        <textarea
            className="
				bg-surface text-background w-full rounded-lg px-4 py-3 transition-colors duration-300
				hover:bg-white 
				focus:bg-white focus:outline-none
			"
            rows={5}
            placeholder={placeholder}
        />
    );
}
