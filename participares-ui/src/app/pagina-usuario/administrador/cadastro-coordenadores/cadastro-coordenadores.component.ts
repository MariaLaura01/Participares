import { EscolasService } from './../../../escolas/escolas.service';
import { Usuarios, Escolas } from './../../../core/model';
import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-coordenadores',
  templateUrl: './cadastro-coordenadores.component.html',
  styleUrls: ['./cadastro-coordenadores.component.css']
})
export class CadastroCoordenadoresComponent implements OnInit
{

  usuario = new Usuarios();

  escolas = [];

  constructor(private userService: UsuarioService,
    private escolaService: EscolasService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void
  {
    const loginUsuario = this.route.snapshot.params[`login`];
    if(loginUsuario)
    {
      this.carregarUsuario(loginUsuario);
    }
    this.carregarCoordenadores();
    this.carregarEscolas();
  }

  carregarCoordenadores() : any
  {
    return this.userService.listarTodos()
    .then(usuario =>{
      this.usuario = usuario.map((c:any) => ({label: c.nome, value: c.login}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarEscolas() : any
  {
    return this.escolaService.listarTodas()
    .then(escolas => {
      this.escolas = escolas.map((e:any) => ({label: e.nome, value: e.codigo}));
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm) : void
  {
    if(this.editando)
    {
      this.atualizarUsuario(form);
    }
    else
    {
      this.adicionarUsuario(form);
    }
  }

  get editando() : boolean
  {
    return Boolean(this.usuario.login);
  }

  carregarUsuario(login: string): void
  {
    this.userService.buscarPorLogin(login)
      .then((usuario: Usuarios) => {
        this.usuario = usuario;
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  adicionarUsuario(_form: NgForm)
  {
    this.userService.adicionar(this.usuario)
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  atualizarUsuario(_form: NgForm){
    this.userService.atualizar(this.usuario)
      .then((usuario: Usuarios) => {
        this.usuario = usuario;
        this.messageService.add(
          {severity: 'success', detail: 'Usuario alterado com sucesso!'});
      })
      .catch((erro: any) => this.errorHandler.handle(erro));
  }

  novo(form: NgForm){
    form.reset(new Usuarios);
    this.router.navigate(['/pagina-adm']);
  }
}
