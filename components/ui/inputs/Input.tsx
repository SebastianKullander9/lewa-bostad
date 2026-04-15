interface InputProps {
    placeholder: string;
}

export default function Input({ placeholder }: InputProps) {
    return (
        <input
            className="bg-surface py-2 px-4 rounded-lg w-full text-background"
            type="text"
            name="test"
            required
            placeholder={placeholder}
        />
    );
}
