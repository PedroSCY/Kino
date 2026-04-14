import { cn } from "@/utils/cn";

interface SkeletonProps {
	className: string;
}

export default function Skeleton({ className }: SkeletonProps) {
	return (
		<div
			className={cn("bg-red-kino/60 animate-pulse", className)}
		></div>
	);
}