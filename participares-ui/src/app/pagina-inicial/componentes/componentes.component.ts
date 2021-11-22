import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  //teste ->  apagar depois de vincular o bd
  escolas = [
    {nome: 'escola 1', evento: 'evento 1'},
    {nome: 'escola 2', evento: 'evento 2'},
    {nome: 'escola 3', evento: 'evento 3'},
    {nome: 'escola 4', evento: 'evento 4'},
    {nome: 'escola 5', evento: 'evento 5'},
    {nome: 'escola 6', evento: 'evento 6'},
    {nome: 'escola 7', evento: 'evento 7'},
    {nome: 'escola 8', evento: 'evento 8'},
    {nome: 'escola 9', evento: 'evento 9'},
    {nome: 'escola 10', evento: 'evento 10'},
    {nome: 'escola 11', evento: 'evento 11'},
    {nome: 'escola 12', evento: 'evento 12'}
      ];

  constructor() { }

  ngOnInit(): void {

  }

}
