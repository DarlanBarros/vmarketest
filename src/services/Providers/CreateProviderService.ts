/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import Provider from '../../models/Provider';

interface Request {
    nome_vendedor: string;
    email_vendedor: string;
    cnpj: string;
    razao_social: string;
    nome_fantasia: string;
    telefone: string;
    celular_vendedor: string;
}

class CreateProviderService {
    public async execute(data: Request): Promise<Provider> {
        const providersRepository = getRepository(Provider);

        const checkProviderExists = await providersRepository.findOne({
            where: {
                cnpj: data.cnpj,
            },
        });

        if (checkProviderExists) {
            throw new Error('Provider already existis');
        }

        const provider = providersRepository.create(data);

        await providersRepository.save(provider);

        return provider;
    }
}

export default CreateProviderService;
