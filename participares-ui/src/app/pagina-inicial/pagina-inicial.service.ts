import { Escolas, Evento } from './../core/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PaginaInicialService
{
  homeUrl = 'http://localhost:8080/home';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any>
  {
    return this.http.get(`${this.homeUrl}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  excluir(codigo: number): Promise<any>
  {
    return this.http.delete(`${this.homeUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(evento: Evento): Promise<Evento> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

      return this.http.post<Evento>(this.homeUrl,
        Evento.toJson(evento), {headers})
        .toPromise();
  }

  atualizar(evento: Evento): Promise<Evento> | any
  {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<Evento>(`${this.homeUrl}/${evento.codigo}`, Evento.toJson(evento), { headers })
      .toPromise()
      .then(response => {
        const eventoAlterado = response;
        return eventoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Evento> | any
  {
    return this.http.get<Evento>(`${this.homeUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const evento = response;
        return evento;
      });
  }

  nomeEscolaPorCodigo(codigo: number): Promise<Escolas> | any // Provavelmente está errado
  {
    return this.http.get<Escolas>(`${this.homeUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const escola = response;
        return escola;
      });
  }
}
