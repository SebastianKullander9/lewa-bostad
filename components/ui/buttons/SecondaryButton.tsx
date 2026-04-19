/*interface SecondaryButtonProps {
	
}*/

export default function SecondaryButton() {
    return (
        <div className="relative inline-block border border-background px-4 py-2 rounded-full group overflow-hidden cursor-pointer">
            <p>Sekundär button</p>
            <span
                className="
				absolute inset-0 translate-x-full group-hover:-translate-x-full transition-transform duration-550
				ease-in-out bg-linear-to-r from-transparent via-white/50 to-transparent
				"
            />
        </div>
    );
}
