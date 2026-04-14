import React from "react";
import Container from "../template/Container";
import Titulo from "../template/Titulo";
import Grid from "../template/Grid";
import CardFilme from "./CardFilme";

interface ListaDeFilmesProps {
  filmes: Filme[];
  className?: string;
  titulo: string;
  tituloPequeno?: boolean;
}

export default function ListaDeFilmes({
  filmes,
  titulo,
  tituloPequeno,
  className,
}: ListaDeFilmesProps) {
  return (
    <Container className={className}>
      <Titulo
        className="pl-2"
        alinhar="center"
        texto={titulo}
        pequeno={tituloPequeno}
      />
      <Grid className="md:grid-cols-2 lg:grid-cols-3 py-5">
        {filmes.map((filme) => {
          return <CardFilme filme={filme} key={filme.id} />;
        })}
      </Grid>
    </Container>
  );
}
