import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passando parametros entre componentes filho',
      autoria: 'Componente pai',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Minha propiedade é decorada com @Input() ',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
