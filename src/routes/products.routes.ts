/* eslint-disable no-shadow */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateProductService from '../services/Products/CreateProductService';
import DeleteProductService from '../services/Products/DeleteProductService';
import UpdateProductService from '../services/Products/UpdateProductService';

import ProductsRepository from '../repositories/ProductsRepository';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
    const productRepository = getCustomRepository(ProductsRepository);
    const { id, provider } = request.query;

    if (id) {
        const product = await productRepository.findOne({
            where: { id },
        });

        return response.json(product);
    }

    if (provider) {
        const product = await productRepository.findByProvider(
            String(provider),
        );

        return response.json(product);
    }

    const products = await productRepository.find();

    return response.json(products);
});

productsRouter.post('/', async (request, response) => {
    try {
        const data = request.body;

        const createProduct = new CreateProductService();

        const product = await createProduct.execute(data);

        return response.json(product);
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

productsRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = request.body;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute(id, data);

        return response.json(product);
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

productsRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute(id);

        return response.status(200).json({ ok: true });
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

export default productsRouter;
