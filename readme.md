# Link do vídeo demonstrativo: https://youtu.be/ltozPvM7Md4
## ⚠ DETALHE ⚠ 
### O vídeo ultrapassa 3 minutos pois o meu computador é fraco (foi necessário executar o VSCode com servidor, OBS para gravação do vídeo e o Insomnia simultaneamente)


# API de Gerenciamento de Produtos com Esquema Dinâmico

Este projeto consiste em uma API REST desenvolvida em **Node.js** com **Express** e **MongoDB (Mongoose)**, projetada para gerenciar o cadastro, atualização, remoção, listagem com filtros compostos, busca textual e paginação de produtos.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB & Mongoose**

---

## Como Rodar o Servidor

### 1. Pré-requisitos
Certifique-se de ter instalado na sua máquina:
- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- Uma instância do [MongoDB](https://www.mongodb.com/) rodando localmente ou na nuvem (MongoDB Atlas).

### 2. Instalação das Dependências
Clone este repositório, navegue até a pasta do projeto e instale as dependências executando:

```bash
npm install
```

### 3. Configuração do Banco de Dados
Crie um arquivo chamado `.env` na raiz do projeto e configure a URL de conexão com o seu MongoDB:

```env
PORT=5000
MONGO_URI=mongodb://<seu_nome_de_usuario>:<sua_senha>@ac-aliee7l-shard-00-00.hqk0z04.mongodb.net:27017,ac-aliee7l-shard-00-01.hqk0z04.mongodb.net:27017,ac-aliee7l-shard-00-02.hqk0z04.mongodb.net:27017/?ssl=true&replicaSet=atlas-38i6lv-shard-0&authSource=admin&appName=NewClusterKrull"
```

### 4. Inicializando a Aplicação
Para rodar o servidor em ambiente de desenvolvimento (com recarga automática):

```bash
npm run dev
```
*(Ou utilize `node server.js` caso não utilize nodemon).* O servidor estará rodando em `http://localhost:3000`.

---

## Script de População do Banco de Dados (Seed)

Para popular rapidamente o seu MongoDB com 10 produtos iniciais, você pode utilizar o script Node.js abaixo. 

Rode o comando: (`node seed.js`):

---

## Endpoints Principais

- `GET /products` - Lista todos os produtos (suporta query params: `category`, `min`, `max`, `search`).
- `POST /products` - Cadastra um novo produto.
- `PUT /products/:id` - Atualiza um produto existente.
- `DELETE /products/:id` - Remove um produto pelo ID.