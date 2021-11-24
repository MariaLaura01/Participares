import { PhotoService } from './../photo.service';
import { Escolas, Imagens } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PaginaEventoService } from './../pagina-evento.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editavel',
  templateUrl: './editavel.component.html',
  styleUrls: ['./editavel.component.css']
})
export class EditavelComponent implements OnInit
{
  imagens = new Imagens();

  evento = [];

  escola = new Escolas();

  constructor(private pgService: PaginaEventoService,
    private photoService: PhotoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService) { }

    // Relacionado com as fotos
    responsiveOptions:any[] =
    [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  displayBasic: boolean = false;

  displayBasic2: boolean = false;

  displayCustom: boolean = false;

  activeIndex: number = 0;

  ngOnInit(): void
  {
    this.pesquisar();
    this.photoService.getImages().then(images => this.imagens = images);
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

  //add nova foto
  novaFoto(_form: NgForm)
  {
    this.photoService.adicionarFoto(this.imagens)
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  // Clique na foto
  imageClick(index: number)
  {
    this.activeIndex = index;
    this.displayCustom = true;
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
