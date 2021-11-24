import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastroCoordenadoresComponent } from './cadastro-coordenadores/cadastro-coordenadores.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCoordenadoresComponent } from './lista-coordenadores/lista-coordenadores.component';
import { ItemListaCoordenadoresComponent } from './item-lista-coordenadores/item-lista-coordenadores.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';

import {DropdownModule} from 'primeng/dropdown';
import { PaginaAdmComponent } from './pagina-adm/pagina-adm.component';

@NgModule({
  declarations: [
    ListaCoordenadoresComponent,
    ItemListaCoordenadoresComponent,
    CadastroCoordenadoresComponent,
    PaginaAdmComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DividerModule,
    HttpClientModule,
    TooltipModule,
    DropdownModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ListaCoordenadoresComponent,
    ItemListaCoordenadoresComponent,
    CadastroCoordenadoresComponent,
    PaginaAdmComponent
  ]
})
export class AdministradorModule { }
