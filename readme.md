# API de Gerenciamento de Produtos com Esquema Dinâmico

Este projeto consiste em uma API REST desenvolvida em **Node.js** com **Express** e **MongoDB (Mongoose)**, projetada para gerenciar o cadastro, atualização, remoção, listagem com filtros compostos, busca textual e paginação de produtos.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB & Mongoose**

---

## 🚀 Como Rodar o Servidor

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
PORT=3000
MONGO_URI=mongodb://localhost:27017/nome-do-seu-banco
```

### 4. Inicializando a Aplicação
Para rodar o servidor em ambiente de desenvolvimento (com recarga automática):

```bash
npm run dev
```
*(Ou utilize `node server.js` caso não utilize nodemon).* O servidor estará rodando em `http://localhost:3000`.

---

## 🌱 Script de População do Banco de Dados (Seed)

Para popular rapidamente o seu MongoDB com 10 produtos iniciais, você pode utilizar o script Node.js abaixo. 

Crie um arquivo chamado `seed.js` na raiz do projeto e execute-o (`node seed.js`):

```javascript
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/productModel.js"; // Ajuste o caminho se necessário

dotenv.config();

const sampleProducts = [
  {
    name: "Smartphone Apex 12",
    description: "Celular com 128GB de armazenamento e câmera dupla de alta resolução.",
    price: 1499.99,
    category: "Eletrônicos",
    stock: 25,
    specs: { "marca": "Apex", "memoria": "128GB", "cor": "Preto", "tela": "6.5 polegadas" }
  },
  {
    name: "Smart TV LED 50'",
    description: "Televisor 4K UHD com sistema inteligente e bordas ultrafinas.",
    price: 2399.00,
    category: "Eletrônicos",
    stock: 10,
    specs: { "resolucao": "4K", "polegadas": 50, "voltagem": "Bivolt" }
  },
  {
    name: "Camiseta Básica Algodão",
    description: "Camiseta 100% algodão confortável para o dia a dia.",
    price: 49.90,
    category: "Roupas",
    stock: 100,
    specs: { "tamanho": "M", "cor": "Branco", "material": "Algodão" }
  },
  {
    name: "Calça Jeans Slim",
    description: "Calça jeans masculina com elastano para maior flexibilidade.",
    price: 119.90,
    category: "Roupas",
    stock: 45,
    specs: { "tamanho": 42, "cor": "Azul Escuro", "corte": "Slim" }
  },
  {
    name: "Liquidificador Turbo Inox",
    description: "Liquidificador de alta potência com copo de vidro resistente.",
    price: 189.99,
    category: "Casa e Cozinha",
    stock: 30,
    specs: { "potencia": "900W", "velocidades": 5, "voltagem": "220V" }
  },
  {
    name: "Cafeteira Elétrica Express",
    description: "Prepare seu café expresso cremoso em segundos.",
    price: 329.50,
    category: "Casa e Cozinha",
    stock: 15,
    specs: { "pressao": "15 bar", "cor": "Vermelho", "voltagem": "110V" }
  },
  {
    name: "Livro: O Código Limpo",
    description: "Guia prático para a arte da engenharia de software ágil.",
    price: 85.00,
    category: "Livros",
    stock: 60,
    specs: { "autor": "Robert C. Martin", "paginas": 425, "editora": "Alta Books" }
  },
  {
    name: "Livro: Arquitetura Limpa",
    description: "O guia definitivo para a arquitetura de software estruturada.",
    price: 92.50,
    category: "Livros",
    stock: 40,
    specs: { "autor": "Robert C. Martin", "paginas": 432, "editora": "Alta Books" }
  },
  {
    name: "Tênis de Corrida Runner Pro",
    description: "Tênis leve e com amortecimento avançado para corredores.",
    price: 299.90,
    category: "Esportes",
    stock: 50,
    specs: { "tamanho": 40, "cor": "Cinza/Laranja", "genero": "Unissex" }
  },
  {
    name: "Bola de Futebol Campo",
    description: "Bola oficial de campo costurada à mão com excelente durabilidade.",
    price: 110.00,
    category: "Esportes",
    stock: 20,
    specs: { "circunferencia": "68-70 cm", "material": "PU", "peso": "420g" }
  }
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB para o Seed...");

    await Product.deleteMany({});
    console.log("Produtos anteriores removidos.");

    await Product.insertMany(sampleProducts);
    console.log("10 produtos inseridos com sucesso!");

    process.exit(0);
  } catch (error) {
    console.error("Erro ao popular o banco de dados:", error);
    process.exit(1);
  }
}

seedDB();
```

---

## 📌 Endpoints Principais

- `GET /products` - Lista todos os produtos (suporta query params: `category`, `min`, `max`, `search`, `page`, `limit`).
- `POST /products` - Cadastra um novo produto.
- `PUT /products/:id` - Atualiza um produto existente.
- `DELETE /products/:id` - Remove um produto pelo ID.