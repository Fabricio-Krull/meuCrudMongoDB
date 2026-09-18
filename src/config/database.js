import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const databaseConnect = async () => {

    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB conectado com sucesso!");
    }
    catch (error){
        console.error("Erro ao conectar ao MongoDB: " + error);
        process.exit(1);
    }

};

export default databaseConnect;