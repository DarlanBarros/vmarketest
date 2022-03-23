/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';

import Product from '../../models/Product';
import ProductsRepository from '../../repositories/ProductsRepository';

class ReadProductService {
    public async execute(provider: string): Promise<Product[]> {
        const productsRepository = getCustomRepository(ProductsRepository);

        const products = await productsRepository.findByProvider(provider);

        if (!products) {
            throw new Error('Any product was found.');
        }

        return products;
    }
}

export default ReadProductService;
