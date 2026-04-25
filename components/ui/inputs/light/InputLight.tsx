interface InputLightProps {
    placeholder: string;
}

export default function InputLight({ placeholder }: InputLightProps) {
    return (
        <input
            className="
				bg-white py-2 px-4 rounded-lg w-full text-background transition-colors duration-300
				focus:outline-none
			"
            type="text"
            name="test"
            required
            placeholder={placeholder}
        />
    );
}
