/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import Product from '../../models/Product';

class DeleteProductService {
    public async execute(id: string): Promise<void> {
        const productsRepository = getRepository(Product);

        const product = await productsRepository.findOne({
            where: { id },
        });

        if (!product) {
            throw new Error('Product doesnt exists');
        }

        await productsRepository.delete(id);
    }
}

export default DeleteProductService;
