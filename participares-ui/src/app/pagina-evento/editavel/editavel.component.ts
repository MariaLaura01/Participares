import { ErrorHandlerService } from './../../core/error-handler.service';
import { Evento } from './../../core/model';
import { PaginaEventoService } from './../pagina-evento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editavel',
  templateUrl: './editavel.component.html',
  styleUrls: ['./editavel.component.css']
})
export class EditavelComponent implements OnInit
{

  evento = [];

  constructor(private pgService: PaginaEventoService,
    private errorHandler: ErrorHandlerService) { }

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
}
