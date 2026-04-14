import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    className?: string;
    column?: boolean;
    numCols?: number;
    numRows?: number;
}

export default function Grid({
    children,
    className,
    column,
    numCols,
    numRows = 1,
}: GridProps) {
    return (
        <div
            className={cn("grid", className)}
            style={{
                gridTemplateRows: `repeat(${numRows}, minmax(0,1fr))`,
                gridTemplateColumns: column
                    ? `repeat(${numCols}, minmax(0, 1fr))`
                    : undefined,
            }}
        >
            {children}
        </div>
    );
}
