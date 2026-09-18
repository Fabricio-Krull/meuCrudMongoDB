import Product from "../models/productModel.js";

export async function createProduct(req, res) {
    try{
        const { name, price, category, stock, specs } = req.body;
        const newProduct = new Product({
            name,
            price,
            category,
            stock,
            specs
        });
        await newProduct.save();
        res.status(201).json({ message: "Produto criado com sucesso", product: newProduct });
    }
    catch (error){
        res.status(500).json({ message: "Erro ao criar produto", error });
    }
};

export async function getProducts(req, res) {
    try{

        const { category, min, max, search } = req.query;
        let query = {}

        if(category){
            query.category = { $eq: category }
        }

        if(min || max){
            query.price = {};
            if(min) query.price.$gte = Number(min);
            if(max) query.price.$lte = Number(max);
        }

        if(search){
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } }
            ]
        }

        const products = await Product.find(query);
        res.status(200).json(products);
    }
    catch (error){
        res.status(500).json({ message: "Erro ao obter produtos", error });
    }
}

export async function updateProduct (req, res) {
    try{
        const { name, price, category, stock, specs } = req.body;
        const updatedproduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, category, stock, specs },
            { new: true, runValidators: true } // valida o Schema
        );

        if(!updatedproduct){
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        res.status(200).json({ message: "Produto atualizado com sucesso", product: updatedproduct });


    }
    catch(error){
        res.status(500).json({ message: "Erro ao atualizar produto", error });
    }
};

export async function deleteProduct (req, res) {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({ message: "Produto não encontrado"})
        }

        res.status(200).json({ message: "Produto apagado com sucesso"})

    }
    catch(error){
        res.status(500).json({ message: "Erro ao deletar produto", error });
    }
};