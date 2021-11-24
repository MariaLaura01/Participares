import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-coordenadores',
  templateUrl: './lista-coordenadores.component.html',
  styleUrls: ['./lista-coordenadores.component.css']
})
export class ListaCoordenadoresComponent implements OnInit {

  usuario = [];

  constructor(private userService: UsuarioService,
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
    this.userService.pesquisar()
      .then(resultado => {
        this.usuario = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  // Apaga o usuario
  confirmarExclusao(usuario: any): void
  {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(usuario);
      }
    });
  }

  excluir(usuario: any): void
  {
    this.userService.excluir(usuario.codigo)
      .then(() => {
        this.pesquisar();
        this.messageService.add(
          {severity: 'success', detail: 'Usuário excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
