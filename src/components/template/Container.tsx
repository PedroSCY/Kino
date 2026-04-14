import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    bigPadding?: boolean;
}

export default function Container({
    children,
    className,
    bigPadding,
}: ContainerProps) {
    return (
        <div
            className={cn(
                "w-full max-w-7xl mx-auto p-4",
                { "py-20": bigPadding },
                className,
            )}
        >
            {children}
        </div>
    );
}
