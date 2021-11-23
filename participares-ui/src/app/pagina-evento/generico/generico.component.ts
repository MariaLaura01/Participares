import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Escolas } from 'src/app/core/model';
import { PaginaEventoService } from '../pagina-evento.service';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit
{

  evento = [];

  escola = new Escolas();

  constructor(private pgService: PaginaEventoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit() : void
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
