"use client"
import { useState } from "react";
import Container from "../template/Container";
import Titulo from "../template/Titulo";
import Grid from "../template/Grid";
import CardFilme from "./CardFilme";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

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
  const [indeceSelecionado, setIndeceSelecionado] = useState<number | null>(
    null,
  );
  return (
    <Container className={className}>
      <Titulo
        className="pl-2"
        alinhar="center"
        texto={titulo}
        pequeno={tituloPequeno}
      />
      <Grid className="md:grid-cols-2 lg:grid-cols-3 py-5">
        {filmes.map((filme, index) => {
          return (
            <Link
              href={`/filmes/${filme.id}`}
              key={filme.id}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setIndeceSelecionado(index)}
              onMouseLeave={() => setIndeceSelecionado(null)}
            >
              <AnimatePresence>
            {indeceSelecionado === index && (
              <motion.span
                className={`absolute inset-0 h-full w-full bg-red-kino rounded-3xl`}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
              <CardFilme filme={filme} key={filme.id} />
            </Link>
          );
        })}
      </Grid>
    </Container>
  );
}
