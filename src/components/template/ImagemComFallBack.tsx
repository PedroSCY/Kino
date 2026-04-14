"use client"
import { ReactNode, useEffect, useState } from "react";
import Flex from "./Flex";
import Image from "next/image";
import { cn } from "@/utils/cn";

interface ImagemComFallbackProps {
	url: string;
	imgAlt: string;
	className?: string;
	children: ReactNode;
}

export default function ImagemComFallback({
	url,
	imgAlt,
	className,
	children,
}: ImagemComFallbackProps) {
	const [imagemPadrao, setImagemPadrao] = useState(false);

	useEffect(() => {
		fetch(url).then((resposta) => setImagemPadrao(!resposta.ok));
	}, []);

	if (imagemPadrao || !url) {
		return (
			<Flex col className="h-full w-full absolute -z-30">
				{children}
			</Flex>
		);
	}

	return (
		<Image
			fill
			alt={imgAlt}
			src={url}
			className={cn("object-cover", className)}
			sizes="80vw"
		/>
	);
}
