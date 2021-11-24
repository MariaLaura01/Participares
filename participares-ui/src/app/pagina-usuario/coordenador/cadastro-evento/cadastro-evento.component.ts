import { EventoService } from './../../../eventos/eventos.service';
import { Evento } from './../../../core/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UsuarioService } from '../../usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.css']
})
export class CadastroEventoComponent implements OnInit {

  evento = new Evento();

  constructor(private userService: UsuarioService,
    private eventoService: EventoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void
  {
    const codigoEvento = this.route.snapshot.params[`codigo`];
    if(codigoEvento)
    {
      this.carregarEvento(codigoEvento);
    }
    this.carregarEventos();
  }

  carregarEventos() : any
  {
    return this.eventoService.listarTodos()
    .then(evento =>{
      this.evento = evento.map((c:any) => ({label: c.nome, value: c.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) : void
  {
    if(this.editando)
    {
      this.atualizarEvento(form);
    }
    else
    {
      this.adicionarEvento(form);
    }
  }

  get editando() : boolean
  {
    return Boolean(this.evento.codigo);
  }

  carregarEvento(codigo: number): void
  {
    this.eventoService.buscarPorCodigo(codigo)
      .then((evento : Evento) => {
        this.evento = evento;
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  adicionarEvento(_form: NgForm)
  {
    this.eventoService.adicionar(this.evento)
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  atualizarEvento(_form: NgForm)
  {
    this.eventoService.atualizar(this.evento)
      .then((evento: Evento) => {
        this.evento = evento;
        this.messageService.add(
          {severity: 'success', detail: 'Evento alterado com sucesso!'});
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Evento);
    this.router.navigate(['/pagina-coordenador']);
  }
}
