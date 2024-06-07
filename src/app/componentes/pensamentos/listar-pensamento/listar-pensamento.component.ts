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
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis.  Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Hoje é sexta-feris, dia da maldadis! Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.',
      autoria: 'Mussum Ipsum',
      modelo: 'modelo3'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
