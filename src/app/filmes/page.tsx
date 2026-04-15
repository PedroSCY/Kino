import CardFilmeEmDestaque from "@/components/filmes/CardFilmeEmDestaque";
import ListaDeFilmes from "@/components/filmes/ListaDeFilmes";
import Carrossel from "@/components/template/Carrossel";
import Wrap from "@/components/template/Wrap";
import useMovieAPI from "@/hooks/useMovieAPI";

export default async function Filmes() {
  const { getUltimosFilmes } = useMovieAPI();
  const filmes:Filme[] = await getUltimosFilmes()

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
