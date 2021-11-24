import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-lista-assistente',
  templateUrl: './lista-assistente.component.html',
  styleUrls: ['./lista-assistente.component.css']
})
export class ListaAssistenteComponent implements OnInit {

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
