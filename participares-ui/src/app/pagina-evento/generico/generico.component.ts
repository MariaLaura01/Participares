import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Escolas, Imagens } from 'src/app/core/model';
import { PaginaEventoService } from '../pagina-evento.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit
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

  ngOnInit() : void
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
