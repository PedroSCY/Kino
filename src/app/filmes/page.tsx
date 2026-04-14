"use client";
import CardFilmeEmDestaque from "@/components/filmes/CardFilmeEmDestaque";
import ListaDeFilmes from "@/components/filmes/ListaDeFilmes";
import Carrossel from "@/components/template/Carrossel";
import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import React, { useEffect, useState } from "react";

export default function Filmes() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const { getUltimosFilmes } = useMovieAPI();

  useEffect(() => {
    getUltimosFilmes().then(setFilmes);
  }, []);

  return (
    <Wrap>
      <Carrossel slideAutomatico>
        {filmes.map((filme) => {
          return <CardFilmeEmDestaque filme={filme} key={filme.id}/>;
        })}
      </Carrossel>
      <ListaDeFilmes filmes={filmes} titulo="Ultimos Filmes"/>
    </Wrap>
  );
}
