export class Escolas
{
  codigo!: number;
  nome!: string;
  endereco!: string;
}

export class Evento
{
  codigo!: number;
  codigo_escola!: number;
  nome!: string;
  descricao!: string;
  data!: Date;
  local!: string;
}

export class Imagens
{
  codigo!: number;
  codigo_do_evento!: number;
  link!: string;
}

export class Usuarios
{
  login!: string;
  senha!: string;
  tipo!: string;
  codigo_da_escola!: number;
}
