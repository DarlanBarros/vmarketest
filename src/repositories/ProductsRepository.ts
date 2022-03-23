import { EntityRepository, Repository } from 'typeorm';

import Product from '../models/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
    public async findByProvider(provider: string): Promise<Product[] | null> {
        const findProduct = await this.find({
            where: { provider_id: provider },
        });

        return findProduct || null;
    }
}

export default ProductsRepository;
