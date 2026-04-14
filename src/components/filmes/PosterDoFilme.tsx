import React from "react";
import Wrap from "../template/Wrap";
import ImagemComFallback from "../template/ImagemComFallBack";
import { IconMovie } from "@tabler/icons-react";

interface PosterDoFilmeProps {
  url: string;
  titulo: string;
}

export default function PosterDoFilme({ url, titulo }: PosterDoFilmeProps) {
  return (
    <Wrap
      className={`h-72 w-48 md:h-96 md:w-80 lg:h-175 lg:min-w-125 relative overflow-hidden rounded-lg m-auto`}
    >
      <ImagemComFallback url={url} imgAlt={`Poster do filme ${titulo}`}>
        <IconMovie className="w-1/2 h-2/3 text-slate-800"/>
      </ImagemComFallback>
    </Wrap>
  );
}
