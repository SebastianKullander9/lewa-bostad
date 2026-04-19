/*interface PrimaryButtonProps {
	
}*/

export default function PrimaryButton() {
    return (
        <div className="bg-background text-surface inline-block px-4 py-2 rounded-full relative group overflow-hidden cursor-pointer">
            <p>Primär button</p>
            <span
                className="
				absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-550 
				ease-in-out bg-linear-to-r from-transparent via-white/18 to-transparent
				"
            />
        </div>
    );
}
