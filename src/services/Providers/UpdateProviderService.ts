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

class UpdateProviderService {
    public async execute(id: string, data: Request): Promise<Provider> {
        const providersRepository = getRepository(Provider);

        const provider = await providersRepository.findOne({
            where: { id },
        });

        if (!provider) {
            throw new Error('Provider doesnt exists');
        }

        provider.nome_vendedor = data.nome_vendedor;
        provider.email_vendedor = data.email_vendedor;
        provider.cnpj = data.cnpj;
        provider.razao_social = data.razao_social;
        provider.nome_fantasia = data.nome_fantasia;
        provider.telefone = data.telefone;
        provider.celular_vendedor = data.celular_vendedor;

        return providersRepository.save(provider);
    }
}

export default UpdateProviderService;
