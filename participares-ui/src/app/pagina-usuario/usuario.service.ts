import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../core/model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService
{
  userUrl = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  listarTodos(): Promise<any>
  {
    return this.http.get(this.userUrl)
    .toPromise();
  }

  pesquisar() : Promise<any>
  {
    return this.http.get(`${this.userUrl}`)
    .toPromise()
    .then(response => {
      return response;
    })
  }

  adicionar(user: Usuarios) : Promise<Usuarios> | any
  {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post<Usuarios>(this.userUrl, Usuarios.toJson(user), {headers})
    .toPromise();
  }

  excluir(login: string): Promise<any>
  {
    return this.http.delete(`${this.userUrl}/${login}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(user: Usuarios): Promise<Usuarios> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Usuarios>(`${this.userUrl}/${user.login}`, Usuarios.toJson(user), { headers })
      .toPromise()
      .then(response => {
        const userAlterado = response;
        return userAlterado;
      });
  }

  buscarPorLogin(login: string): Promise<Usuarios> | any
  {
    return this.http.get<Usuarios>(`${this.userUrl}/${login}`)
      .toPromise()
      .then(response => {
        const user = response;
        return user;
      });
  }
}
