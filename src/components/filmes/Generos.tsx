"use client";
import { useEffect, useState } from "react";
import Flex from "../template/Flex";
import useMovieAPI from "@/hooks/useMovieAPI";
import { cn } from "@/utils/cn";
import Skeleton from "../template/Skeleton";

interface GenerosProps {
  idFilme: string;
  grande?: boolean;
  generosExistentes?: Genero[];
}

export default function Generos({
  idFilme,
  grande,
  generosExistentes,
}: GenerosProps) {
  const [generos, setGeneros] = useState<Genero[] | null>(null);
  const { getGenerosDoFilme } = useMovieAPI();

  useEffect(() => {
    if (generosExistentes && generosExistentes.length > 0) {
      setGeneros(generosExistentes);
    } else {
      getGenerosDoFilme(idFilme).then(setGeneros);
    }
  }, []);

  if (!generos) {
    return (
      <Flex className="flex-wrap justify-start">
        {Array(4)
          .fill(0)
          .map((_, i) => {
            return <Skeleton key={i} className="rounded-lg h-8 w-24" />;
          })}
      </Flex>
    );
  }

  return (
    <Flex className="flex-wrap justify-start">
      {generos.map((genero) => {
        return (
          <span
            key={genero.id}
            className={cn(
              `bg-red-kino/50 font-semibold backdrop-blur-md p-1 rounded-lg text-xs`,
              { "text-lg": grande },
            )}
          >
            {genero.nome}
          </span>
        );
      })}
    </Flex>
  );
}
