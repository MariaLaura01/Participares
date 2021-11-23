import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginaEventoService
{

  eventosUrl = 'http://localhost:8080/eventos';

  constructor(private http: HttpClient) { }

  pesquisar(): Promise<any>
  {
    return this.http.get(`${this.eventosUrl}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  excluir(codigo: number): Promise<any>
  {
    return this.http.delete(`${this.eventosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }
}
