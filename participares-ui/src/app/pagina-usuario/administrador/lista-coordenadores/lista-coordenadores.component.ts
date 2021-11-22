import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-coordenadores',
  templateUrl: './lista-coordenadores.component.html',
  styleUrls: ['./lista-coordenadores.component.css']
})
export class ListaCoordenadoresComponent implements OnInit {

//teste ->  apagar depois de vincular o bd
  coordenadores = [
  {nome: 'nome 1', email: 'email 1', escola: 'escola 1'},
  {nome: 'nome 2', email: 'email 2', escola: 'escola 1'},
  {nome: 'nome 3', email: 'email 3', escola: 'escola 1'},
  {nome: 'nome 4', email: 'email 4', escola: 'escola 1'},
  {nome: 'nome 5', email: 'email 5', escola: 'escola 1'},
  {nome: 'nome 6', email: 'email 6', escola: 'escola 1'},
  {nome: 'nome 7', email: 'email 7', escola: 'escola 1'},
  {nome: 'nome 8', email: 'email 8', escola: 'escola 1'},
  {nome: 'nome 9', email: 'email 9', escola: 'escola 1'},
  {nome: 'nome 10', email: 'email 10', escola: 'escola 1'},
  {nome: 'nome 11', email: 'email 11', escola: 'escola 1'},
  {nome: 'nome 12', email: 'email 12', escola: 'escola 1'}
    ];


  constructor() { }

  ngOnInit(): void {
  }

}
