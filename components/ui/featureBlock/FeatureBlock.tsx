interface ContentBlockProps {
    title: string;
    number: string;
    text: string;
}

export default function FeatureBlock({ title, number, text }: ContentBlockProps) {
    return (
        <div className="flex flex-col gap-base">
            <div className="flex flex-col gap-small">
                <p className="text-small">{number}</p>
                <p className="text-large tracking-wider font-medium">{title}</p>
            </div>
            <p className="text-medium">{text}</p>
        </div>
    );
}
