
# Angular 14 

## 01 - Conhecendo o Angular

### Instalar e utilizar o Angular CLI

Para instalar o Angular CLI, abra seu terminal e utilize o seguinte comando:

`npm install -g @angular/cli@14.0.0`

### Criar uma aplicação Angular

Após instalarmos a ferramenta vamos usá-la para criar o projeto [memoteca, clique aqui e acesse o figma do projeto](https://www.figma.com/file/YTSUBbe7Zgwx3L567TAzTc/Memoteca---Angular%3A-Come%C3%A7ando-com-o-Framework?node-id=148%3A26), em seguida vá até o diretório que deseja construir sua aplicação e execute o comando a seguir:

`ng new memoteca`


[GitHub - Memoteca](https://github.com/alura-cursos/2438-angular-memoteca)

### Generate Component

Abra o terminal, e digite o comando ng `generate` e o caminho `componentes` juntamente com o nome do componente, que será "cabecalho":

`ng generate component componentes/cabecalho`

Será gerado os seguintes artefatos:

- cabecalho.component.css
- cabecalho.component.html
- cabecalho.component.spec.ts
- cabecalho.component.ts

Obs.: Você pode digitar a versão curta do comando: `ng g c componentes/cabecalho`

## 02 - Entendendo o fluxo de dados

### Property Binding
Passa valores de uma propriedade do component `pensamento.ts` para atributos de tag dentro do template `pensamento.html` com o uso de property binding;

` <input type="text" id="autoria" [value]="pensamento.autoria">`


Mostra valores de propriedades do component no template por meio da interpolação

`<p class="conteudo">{{ pensamento.conteudo }}</p>`

![property binding](src/assets/imagens/property-binding.png)

###  Event Binding
Escuta eventos do template e fazer a chamada de métodos no component com o event binding;

`<button (click)="criarPensamento()" class="botao">Salvar</button>`

![property binding](src/assets/imagens/event-bind.png)

### Two-way Data Binding
Usar a diretiva `ngModel` que pertence ao `FormsModule` para a comunicação bidirecional entre component e template.

Para isso, acessaremos no arquivo `app.module.ts`. Na seção imports, digitaremos uma vírgula após o último item e importaremos o `FormsModule`. Após o comando, o Auto Import fará a importação automática.

`imports: [BrowserModule,AppRoutingModule,FormsModule]`

No template substituir o atributo `[value]` pela diretiva `[(ngModel)]`, envolvendo-a em parênteses e colchetes por fora.

`<input type="textarea" class="input" id="pensamento" name="pensamento" placeholder="Digite o pensamento" [(ngModel)]="pensamento.conteudo">`

![Two Way Data Binding](src/assets/imagens/two-way-data-bind.png)



