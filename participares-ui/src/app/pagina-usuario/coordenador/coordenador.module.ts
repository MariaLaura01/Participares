import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAssistenteComponent } from './cadastro-assistente/cadastro-assistente.component';
import { ListaAssistenteComponent } from './lista-assistente/lista-assistente.component';
import { ItemListaAssistenteComponent } from './item-lista-assistente/item-lista-assistente.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { PaginaCoordenadorComponent } from './pagina-coordenador/pagina-coordenador.component';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    CadastroAssistenteComponent,
    ListaAssistenteComponent,
    ItemListaAssistenteComponent,
    CadastroEventoComponent,
    PaginaCoordenadorComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CalendarModule,
    DividerModule,
    TableModule
  ],
  exports : [
    CadastroAssistenteComponent,
    CadastroEventoComponent,
    ItemListaAssistenteComponent,
    ListaAssistenteComponent,
    PaginaCoordenadorComponent
  ]
})
export class CoordenadorModule { }
