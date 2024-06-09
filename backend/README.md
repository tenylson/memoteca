# json-server

## Instalação 
para instalar digite o comando: `npm i json-server`

## Package.json
Crie um diretorio para o backend. Dentro da pasta digitaremos o comando abaixo para criar o arquivo `package.json.`

`npm init -y`

Criaremos dentro da pasta backend o arquivo `db.json`, que conterá todos os recursos (ou endpoints) da API. Acessaremos o arquivo e criaremos um objeto que possuirá um arranjo de pensame

Acessaremos em seguida o package.json. Na seção "scripts": {} temos o código abaixo:

`    "test": "echo \"Error: no test specified\" && exit 1"`

Mudaremos o comando "test" para "start" e substituiremos o conteúdo das aspas duplas.

`"start": "json-server --watch db.json --port 3000"`



## Inicialização
Rode o json-server com o comando `npm star`