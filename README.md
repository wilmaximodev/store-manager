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
```

## Funcionalidades

Exemplos de requisição:

Cadastro de Produtos
Endpoint: POST /products


```bash
{
  "name": "Nome do Produto",
  "quantity": 10
}
```


Listagem de Produtos:
Endpoint: GET /products

Atualização de Produto:
Endpoint: PUT /products/:id

```bash
{
  "name": "Novo Nome",
  "quantity": 15
}
```

## Observações
Este projeto está em constante desenvolvimento para melhorias e implementação de novas funcionalidades.
