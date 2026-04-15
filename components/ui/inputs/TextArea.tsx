interface TextAreaProps {
    placeholder: string;
}

export default function TextArea({ placeholder }: TextAreaProps) {
    return (
        <textarea
            className="bg-surface text-background w-full rounded-lg px-4 py-3"
            rows={5}
            placeholder={placeholder}
        />
    );
}
