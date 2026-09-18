import express from 'express';
import cors from 'cors'

import databaseConnect from './src/config/database.js';
import productRouter from './src/routes/productRoutes.js';

const app = express();

databaseConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send("API funcionando e MongoDB conectado.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});