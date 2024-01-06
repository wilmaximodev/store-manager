# Store Manager Project

## Contexto
Este projeto foi desenvolvido na [@Trybe](https://www.betrybe.com/) como parte do curso de desenvolvimento web. Trata-se de uma API RESTful para gerenciamento de vendas, permitindo operações básicas (CRUD) de produtos e vendas.

## Tecnologias Utilizadas

- Back-end:
  - Node.js
  - Express
  - MySQL

## Instalação

1. Clone o projeto:

    ```bash
    git clone git@github.com:seu-usuario/store-manager.git
    ```

2. Instale as dependências:

    ```bash
    cd store-manager
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

    ```env
    MYSQL_HOST=localhost
    MYSQL_USER=seu-usuario
    MYSQL_PASSWORD=sua-senha
    PORT=3000
    ```

## Executando a Aplicação

Execute o seguinte comando na pasta raiz:

```bash
npm start

## Funcionalidades

Cadastro de Produtos
Endpoint: POST /products

Exemplo de requisição:

{
  "name": "Nome do Produto",
  "quantity": 10
}


Peço desculpas pela confusão. Parece que houve um erro de formatação. Aqui está uma versão corrigida:

markdown
Copy code
# Store Manager Project

## Contexto
Este projeto foi desenvolvido na [@Trybe](https://www.betrybe.com/) como parte do curso de desenvolvimento web. Trata-se de uma API RESTful para gerenciamento de vendas, permitindo operações básicas (CRUD) de produtos e vendas.

## Tecnologias Utilizadas

- Back-end:
  - Node.js
  - Express
  - MySQL

## Instalação

1. Clone o projeto:

    ```bash
    git clone git@github.com:seu-usuario/store-manager.git
    ```

2. Instale as dependências:

    ```bash
    cd store-manager
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

    ```env
    MYSQL_HOST=localhost
    MYSQL_USER=seu-usuario
    MYSQL_PASSWORD=sua-senha
    PORT=3000
    ```

## Executando a Aplicação

Execute o seguinte comando na pasta raiz:

```bash
npm start
Os endpoints seguem o padrão REST. Utilize os verbos HTTP para realizar as requisições.

Funcionalidades
Cadastro de Produtos
Endpoint: POST /products

Exemplo de requisição:

json
Copy code
{
  "name": "Nome do Produto",
  "quantity": 10
}

Listagem de Produtos:
Endpoint: GET /products

Atualização de Produto:
Endpoint: PUT /products/:id
{
  "name": "Novo Nome",
  "quantity": 15
}


Peço desculpas pela confusão. Parece que houve um erro de formatação. Aqui está uma versão corrigida:

markdown
Copy code
# Store Manager Project

## Contexto
Este projeto foi desenvolvido na [@Trybe](https://www.betrybe.com/) como parte do curso de desenvolvimento web. Trata-se de uma API RESTful para gerenciamento de vendas, permitindo operações básicas (CRUD) de produtos e vendas.

## Tecnologias Utilizadas

- Back-end:
  - Node.js
  - Express
  - MySQL

## Instalação

1. Clone o projeto:

    ```bash
    git clone git@github.com:seu-usuario/store-manager.git
    ```

2. Instale as dependências:

    ```bash
    cd store-manager
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente:

    ```env
    MYSQL_HOST=localhost
    MYSQL_USER=seu-usuario
    MYSQL_PASSWORD=sua-senha
    PORT=3000
    ```

## Executando a Aplicação

Execute o seguinte comando na pasta raiz:

```bash
npm start
Os endpoints seguem o padrão REST. Utilize os verbos HTTP para realizar as requisições.

Funcionalidades
Cadastro de Produtos
Endpoint: POST /products

Exemplo de requisição:

json
Copy code
{
  "name": "Nome do Produto",
  "quantity": 10
}
Listagem de Produtos
Endpoint: GET /products
Atualização de Produto
Endpoint: PUT /products/:id

Exemplo de requisição:

json
Copy code
{
  "name": "Novo Nome",
  "quantity": 15
}
...

## Observações
Este projeto está em constante desenvolvimento para melhorias e implementação de novas funcionalidades.
