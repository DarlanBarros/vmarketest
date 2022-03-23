/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request {
    codigo: string;
    nome: string;
    valor: number;
    peso: number;
    estoque: number;
    provider_id: string;
}

class CreateProductService {
    public async execute(data: Request): Promise<Product> {
        const productsRepository = getRepository(Product);

        const checkProductExists = await productsRepository.findOne({
            where: {
                codigo: data.codigo,
            },
        });

        if (checkProductExists) {
            throw new Error('Product already existis');
        }

        const product = productsRepository.create(data);

        await productsRepository.save(product);

        return product;
    }
}

export default CreateProductService;
