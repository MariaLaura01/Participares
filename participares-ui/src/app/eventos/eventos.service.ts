import { Evento } from './../core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventoService
{
  eventoUrl = 'http://localhost:8080/evento';

  constructor(private http: HttpClient) { }

  listarTodos(): Promise<any>
  {
    return this.http.get(this.eventoUrl)
    .toPromise();
  }

  pesquisar() : Promise<any>
  {
    return this.http.get(`${this.eventoUrl}`)
    .toPromise()
    .then(response => {
      return response;
    })
  }

  adicionar(evento: Evento) : Promise<Evento> | any
  {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post<Evento>(this.eventoUrl, Evento.toJson(evento), {headers})
    .toPromise();
  }

  excluir(codigo: number): Promise<any>
  {
    return this.http.delete(`${this.eventoUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(evento: Evento): Promise<Evento> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Evento>(`${this.eventoUrl}/${evento.codigo}`, Evento.toJson(evento), { headers })
      .toPromise()
      .then(response => {
        const userAlterado = response;
        return userAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Evento> | any
  {
    return this.http.get<Evento>(`${this.eventoUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const user = response;
        return user;
      });
  }
}
