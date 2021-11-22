import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PasswordModule
  ],
  exports: [
    LoginComponent
  ]
})
export class PaginaLoginModule { }
