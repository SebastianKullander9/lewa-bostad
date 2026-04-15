interface ContentBlockProps {
    title: string;
    text: string;
}

export default function ContentBlock({ title, text }: ContentBlockProps) {
    return (
        <div>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    );
}
