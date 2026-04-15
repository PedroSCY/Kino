import Titulo from "../template/Titulo";
import Wrap from "../template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";
import Carrossel from "../template/Carrossel";
import Image from "next/image";
import Flex from "../template/Flex";
import Container from "../template/Container";

interface AlbumProps {
  idAtor: string;
}

export default async function Album({ idAtor }: AlbumProps) {
  const { getImagensAtor } = useMovieAPI();
  const imagens = await getImagensAtor(idAtor);

  const imagensPorSlide = 3;
  let imagensRestantes = imagens;
  const resultado = [];
  while (imagensRestantes.length >= imagensPorSlide) {
    resultado.push(imagensRestantes.splice(0, imagensPorSlide));
  }

  if (imagens.length <= 0) {
    return;
  }

  return (
    <Wrap>
      <Titulo
        pequeno
        texto="Fotos do(a) artista"
        className="w-full"
        alinhar="center"
      />
      <Carrossel>
        {resultado.map((grupo: string[], index) => {
          return (
            <Container key={index}>
              <Flex className="justify-between w-full">
                {grupo.map((linkImagem) => {
                  return (
                    <Wrap
                      key={linkImagem}
                      className={`h-36 sm:h-52 md:h-96 lg:min-h-150
                            relative overflow-hidden rounded-lg`}
                    >
                      <Image
                        src={linkImagem}
                        alt="imagem do ator"
                        className="object-cover"
                        sizes="40vw"
                        fill
                        priority
                      />
                    </Wrap>
                  );
                })}
              </Flex>
            </Container>
          );
        })}
      </Carrossel>
    </Wrap>
  );
}
