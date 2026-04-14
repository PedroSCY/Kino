import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface FlexProps {
    children: ReactNode;
    className?: string;
    col?: boolean;
    row?: boolean;
}

export default function Flex({ children, className, col, row }: FlexProps) {
    return (
        <div
            className={cn(
                "flex  justify-center items-center gap-2",
                { "flex-col": col, "flex-row": row },
                className,
            )}
        >
            {children}
        </div>
    );
}
