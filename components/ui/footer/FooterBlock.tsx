import React from "react";

interface FooterBlockProps {
    rows: string;
    children: React.ReactNode;
}

export default function FooterBlock({ rows, children }: FooterBlockProps) {
    return <div className={`rows-${rows}`}>{children}</div>;
}
