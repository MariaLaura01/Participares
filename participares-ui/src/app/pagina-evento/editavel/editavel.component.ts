import { Escolas } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PaginaEventoService } from './../pagina-evento.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-editavel',
  templateUrl: './editavel.component.html',
  styleUrls: ['./editavel.component.css']
})
export class EditavelComponent implements OnInit
{
  evento = [];

  escola = new Escolas();

  constructor(private pgService: PaginaEventoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void
  {
    this.pesquisar();
  }

  // Insere as informações na página
  pesquisar(): void
  {
    this.pgService.pesquisar()
      .then(resultado => {
        this.evento = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  // Apaga o evento
  confirmarExclusao(evento: any): void
  {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(evento);
      }
    });
  }

  excluir(evento: any): void
  {
    this.pgService.excluir(evento.codigo)
      .then(() => {
        this.pesquisar();
        this.messageService.add(
          {severity: 'success', detail: 'Evento excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  //pega o nome da escola atraves do codigo (não sei se tá certo)
  buscarEscola(codigo: number) : void
  {
    this.pgService.nomeEscolaPorCodigo(codigo)
    .then((escola: Escolas) =>
    {
      this.escola = escola;
    })
    .catch((erro: any) => this.errorHandler.handle(erro));
  }
}
