import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./src/models/productModel.js"; // Ajuste o caminho se necessário

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
