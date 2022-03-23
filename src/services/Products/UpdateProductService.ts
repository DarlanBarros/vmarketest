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

class UpdateProductService {
    public async execute(id: string, data: Request): Promise<Product> {
        const productsRepository = getRepository(Product);

        const product = await productsRepository.findOne({
            where: { id },
        });

        if (!product) {
            throw new Error('Provider doesnt exists');
        }

        product.codigo = data.codigo;
        product.nome = data.nome;
        product.valor = data.valor;
        product.peso = data.peso;
        product.estoque = data.estoque;
        product.provider_id = data.provider_id;

        return productsRepository.save(product);
    }
}

export default UpdateProductService;
