    <h1>Store Manager Project</h1>

    <h2>Contexto</h2>
    <p>Este projeto foi desenvolvido como parte do curso de programação da <a href="https://www.betrybe.com/">@Trybe</a>. O projeto consiste na construção de uma API RESTful utilizando a arquitetura MSC. Trata-se de um sistema de gerenciamento de vendas, onde é possível realizar operações de criação, visualização, exclusão e atualização (CRUD) de produtos e vendas.</p>

    <p>Foi utilizado o banco de dados MySQL para a gestão dos dados.</p>

    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li>Back-end:</li>
        <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
        </ul>
    </ul>

    <h2>Instalação de Dependências</h2>
    <p>Após clonar o projeto, execute o seguinte comando na pasta raiz:</p>
    <code>npm install</code>

    <h2>Variáveis de Ambiente</h2>
    <p>Na raiz do projeto, crie um arquivo <code>.env</code> para configurar as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja <code>nome</code> e senha <code>1234</code>, o arquivo ficará assim:</p>
    <pre>
MYSQL_HOST=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
PORT=3000
    </pre>

    <h2>Executando a Aplicação</h2>
    <p>Para rodar o projeto, utilize o seguinte comando na pasta raiz:</p>
    <code>npm start</code>

    <p>Os endpoints seguem o padrão REST, utilize os verbos HTTP para realizar as requisições.</p>

    <h2>Requisições</h2>

    <h3>Cadastro de Produtos</h3>
    <p>Para cadastrar um produto, acesse o endpoint <code>POST /products</code></p>
    <p>O endpoint deve receber a seguinte estrutura:</p>
    <pre>
{
  "name": "product_name",
  "quantity": "product_quantity"
}
    </pre>

    <h3>Listar os Produtos</h3>
    <p>Para listar os produtos, acesse o endpoint <code>GET /products</code></p>

    <h3>Atualizar um produto</h3>
    <p>Para atualizar um produto, acesse o endpoint <code>PUT /products/:id</code> passando na URL o ID do produto que deseja atualizar.</p>
    <p>O corpo da requisição deve receber a seguinte estrutura:</p>
    <pre>
{
  "name": "new_product_name",
  "quantity": "new_product_quantity"
}
    </pre>

    <h3>Deletar um produto</h3>
    <p>Para deletar um produto, acesse o endpoint <code>DELETE /products/:id</code> passando na URL o ID do produto que deseja deletar.</p>

    <h3>Cadastro de Vendas</h3>
    <p>Para cadastrar uma venda, acesse o endpoint <code>POST /sales</code></p>
    <p>O endpoint deve receber a seguinte estrutura:</p>
    <pre>
[
  {
    "product_id": "product_id",
    "quantity": "product_quantity",
  }
]
    </pre>

    <h3>Listar as Vendas</h3>
    <p>Para listar as vendas, acesse o endpoint <code>GET /sales</code></p>

    <h3>Atualizar uma venda</h3>
    <p>Para atualizar uma venda, acesse o endpoint <code>PUT /sales/:id</code> passando na URL o ID da venda que deseja atualizar.</p>
    <p>O corpo da requisição deve receber a seguinte estrutura:</p>
    <pre>
[
  {
    "product_id": "id_change",
    "quantity": "new_quantity"
  }
]
    </pre>
