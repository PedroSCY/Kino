import { cn } from "@/utils/cn";

interface DescricaoProps {
	texto: string;
	className?: string;
}

export default function Descricao({ texto, className }: DescricaoProps) {
	return (
		<p
			className={cn(
				`mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm lg:text-md text-justify`,
				className
			)}
		>
			{texto}
		</p>
	);
}

