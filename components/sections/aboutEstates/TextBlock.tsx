interface TextBlockProps {
    number: string;
    title: string;
    text: string;
}

export default function TextBlock({ number, title, text }: TextBlockProps) {
    return (
        <div className="max-w-[35ch]">
            <p className="text-sm">{number}</p>
            <div className="flex flex-col gap-md">
                <p className="text-xl">{title}</p>
                <p className="text-base">{text}</p>
            </div>
        </div>
    );
}
