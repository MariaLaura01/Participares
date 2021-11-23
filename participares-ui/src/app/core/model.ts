import * as moment from 'moment';

export class Escolas
{
  codigo: number | undefined;
  nome: string | undefined;
  endereco: string | undefined;

  static toJson(escola: Escolas) : any
  {
    return
    {
      codigo: escola.codigo;
      nome: escola.nome;
      endereco: escola.endereco;
    };
  }
}

export class Evento
{
  codigo: number | undefined;
  codigo_escola: number | undefined;
  nome: string | undefined;
  descricao: string | undefined;
  data: Date | undefined;
  local: string | undefined;
  escola = new Escolas();

  static toJson(evento: Evento) : any
  {
    return
    {
      codigo: evento.codigo;
      codigo_escola: evento.codigo_escola;
      nome: evento.nome;
      descricao: evento.descricao;
      data: evento.data;
      local: evento.local;
      escola: evento.escola;
    };
  }
}

export class Imagens
{
  codigo: number | undefined;
  codigo_do_evento: number | undefined;
  link: string | undefined;
}

export class Usuarios
{
  login: string | undefined;
  senha: string | undefined;
  tipo: string | undefined;
  codigo_da_escola: number | undefined;
}
