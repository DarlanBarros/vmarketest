/* eslint-disable class-methods-use-this */
import { getRepository } from 'typeorm';
import Provider from '../../models/Provider';

class DeleteProviderService {
    public async execute(id: string): Promise<void> {
        const providersRepository = getRepository(Provider);

        const provider = await providersRepository.findOne({
            where: { id },
        });

        if (!provider) {
            throw new Error('Provider doesnt exists');
        }

        await providersRepository.delete(id);
    }
}

export default DeleteProviderService;
