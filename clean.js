import mongoose from "mongoose";
import Product from "./src/models/productModel.js";
import dotenv from "dotenv";

dotenv.config();

async function clean() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao MongoDB para o Seed...");

    await Product.deleteMany({});
    console.log("Produtos anteriores removidos.");

    process.exit(0);
  } catch (error) {
    console.error("Erro ao apagar o banco de dados:", error);
    process.exit(1);
  }
}

clean();