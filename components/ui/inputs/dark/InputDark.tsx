interface InputProps {
    placeholder: string;
}

export default function InputDark({ placeholder }: InputProps) {
    return (
        <input
            className="
				bg-surface py-2 px-4 rounded-lg w-full text-background transition-colors duration-300
				hover:bg-white
				focus:bg-white focus:outline-none
			"
            type="text"
            name="test"
            required
            placeholder={placeholder}
        />
    );
}
