import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditavelComponent } from '../pagina-evento/editavel/editavel.component';
import { LoginComponent } from '../pagina-login/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {path: 'evento-userg', component: EditavelComponent},
  {path: 'pagina-login', component: LoginComponent}
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
