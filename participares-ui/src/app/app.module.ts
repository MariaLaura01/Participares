import { RoutingModuleModule, routingComponents } from './routing-module/routing-module.module';
import { PaginaUsuarioModule } from './pagina-usuario/pagina-usuario.module';
import { PaginaLoginModule } from './pagina-login/pagina-login.module';
import { PaginaEventoModule } from './pagina-evento/pagina-evento.module';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaginaInicialModule,
    PaginaEventoModule,
    PaginaLoginModule,
    PaginaUsuarioModule,
    RoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
