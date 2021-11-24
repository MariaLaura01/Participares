import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: any;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(usuario: string, senha: string){
    this.auth.login(usuario, senha)
      .then((usuario : any) =>
      {
        if(usuario.tipo === 'Administrador'.toUpperCase)
        {
          this.router.navigate(['/pagina-adm']);
        }
        else if(usuario.tipo === 'Coordenador'.toUpperCase)
        {
          this.router.navigate(['/pagina-coordenador']);
        }
        else if(usuario.tipo === 'Assistente'.toUpperCase)
        {
          this.router.navigate(['/pagina-assistente']);
        }
      })
      .catch(() => {
        this.msg = 'Usuário e/ou senha inválida';
      })
  }

}
