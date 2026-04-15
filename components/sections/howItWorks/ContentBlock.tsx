interface ContentBlockProps {
    title: string;
    number: string;
    text: string;
}

export default function ContentBlock({ title, number, text }: ContentBlockProps) {
    return (
        <div className="max-w-[20ch] flex flex-col gap-xl">
            <div>
                <p className="text-sm">{number}</p>
                <p className="text-xl tracking-wider font-medium">{title}</p>
            </div>
            <p>{text}</p>
        </div>
    );
}
