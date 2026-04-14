import Link from "next/link";
import Flex from "./Flex";
import Wrap from "./Wrap";
import { IconMovie } from "@tabler/icons-react";

export default function Cabecalho() {
	return (
		<Wrap className="bg-neutral-950">
			<header className="p-4 px-auto">
				<Flex className="justify-around">
					<Link
						href="/"
						className={`font-bold px-4 py-2 bg-red-kino
                    flex gap-1 items-center justify-center rounded-lg
                    `}
					>
						<IconMovie size={20} />
						Kino
					</Link>
					<Link
						target="_blank"
						className="font-bold px-4 hover:brightness-75"
						href="https://www.themoviedb.org/"
					>
						The Movie DB
					</Link>
				</Flex>
			</header>
		</Wrap>
	);
}
