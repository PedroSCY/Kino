interface Filme {
  id: string;
  titulo: string;
  descricao: string;
  linkImagemFundo: string;
  linkImagemPoster: string;
  nota: number;
  dataDeLancamento: Date;
}

interface FilmeDetalhado extends Filme {
  tituloOriginal: string;
  generos: Genero[];
  atores: Ator[];
  duracao: number;
}

interface Ator {
  id: string;
  nome: string;
  imagemPerfil: string;
  personagem: string;
}

type AtorDetalhado = {
    id:string;
    nome:string;
    imagemPerfil:string;
    biografia:string;
    dataNascimento:Date;
    genero:string;
    localNascimento:string;
}

type Genero = {
  id: string;
  nome: string;
};
