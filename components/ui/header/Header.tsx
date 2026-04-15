import Link from "next/link";

export default function Header() {
    return (
        <header className="section-x-p flex flex-row justify-between h-(--header-height) py-xs">
            <h1>LEWA BOSTAD</h1>
            <nav className="flex flex-row gap-3xl text-md font-light">
                <Link href="test">Projekt</Link>
                <Link href="test">Om oss</Link>
                <Link href="test">Kontakt</Link>
            </nav>
        </header>
    );
}
