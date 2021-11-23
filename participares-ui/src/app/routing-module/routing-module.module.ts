import { GenericoComponent } from './../pagina-evento/generico/generico.component';
import { CadastroEventoComponent } from './../pagina-usuario/coordenador/cadastro-evento/cadastro-evento.component';
import { ListaAssistenteComponent } from './../pagina-usuario/coordenador/lista-assistente/lista-assistente.component';
import { ItemListaAssistenteComponent } from './../pagina-usuario/coordenador/item-lista-assistente/item-lista-assistente.component';
import { CadastroAssistenteComponent } from './../pagina-usuario/coordenador/cadastro-assistente/cadastro-assistente.component';
import { PaginaCoordenadorComponent } from './../pagina-usuario/coordenador/pagina-coordenador/pagina-coordenador.component';
import { PaginaAdmComponent } from './../pagina-usuario/administrador/pagina-adm/pagina-adm.component';
import { ItemListaCoordenadoresComponent } from './../pagina-usuario/administrador/item-lista-coordenadores/item-lista-coordenadores.component';
import { CadastroCoordenadoresComponent } from './../pagina-usuario/administrador/cadastro-coordenadores/cadastro-coordenadores.component';
import { ListaEventoComponent } from './../pagina-evento/lista-evento/lista-evento.component';
import { ComponentesComponent } from './../pagina-inicial/componentes/componentes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditavelComponent } from '../pagina-evento/editavel/editavel.component';
import { LoginComponent } from '../pagina-login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaCoordenadoresComponent } from '../pagina-usuario/administrador/lista-coordenadores/lista-coordenadores.component';

const routes: Routes =
[
  {path: 'pagina-inicial', component: ComponentesComponent},
  {path: '', redirectTo: '/pagina-inicial', pathMatch: 'full'}, // Definindo que a página inicial do site é a /pagina-inicial

  {path: 'evento-userg', component: GenericoComponent},
  {path: 'editar-evento', component: CadastroEventoComponent},
  //{path: 'pagina-userlog', component: EditavelComponent},
  //{path: 'lista-evento', component: ListaEventoComponent},

  {path: 'pagina-login', component: LoginComponent},

  {path: 'pagina-adm', component: PaginaAdmComponent},
  {path: 'pagina-adm/cadastro-coordenadores', component: CadastroCoordenadoresComponent},
  {path: 'pagina-adm/item-lista-coordenadores', component: ItemListaCoordenadoresComponent},
  {path: 'pagina-adm/lista-coordenadores', component: ListaCoordenadoresComponent},

  {path: 'pagina-coordenador', component: PaginaCoordenadorComponent},
  {path: 'pagina-coordenador/cadastro-assistente', component: CadastroAssistenteComponent},
  {path: 'pagina-coordenador/item-lista-assistente', component: ItemListaAssistenteComponent},
  {path: 'pagina-coordenador/lista-assistente', component: ListaAssistenteComponent},
  {path: 'pagina-coordenador/cadastro-evento', component: CadastroEventoComponent},
  {path: 'pagina-coordenador/lista-eventos', component: ListaEventoComponent},
  {path: 'pagina-coordenador/item-lista-eventos', component: EditavelComponent},

  {path: 'pagina-assistente', component: ListaEventoComponent},
  {path: 'pagina-assistente/item-lista-eventos', component: EditavelComponent},
  {path: 'pagina-assistente/cadastro-evento', component: CadastroEventoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class RoutingModuleModule { }
export const routingComponents = [EditavelComponent, LoginComponent]
