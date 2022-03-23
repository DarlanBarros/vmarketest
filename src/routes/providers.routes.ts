/* eslint-disable no-shadow */
import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateProviderService from '../services/Providers/CreateProviderService';
import DeleteProviderService from '../services/Providers/DeleteProviderService';
import UpdateProviderService from '../services/Providers/UpdateProviderService';

import Provider from '../models/Provider';

const providersRouter = Router();

providersRouter.get('/', async (request, response) => {
    const providerRepository = getRepository(Provider);

    const providers = await providerRepository.find();

    return response.json(providers);
});

providersRouter.post('/', async (request, response) => {
    try {
        const data = request.body;

        const createProvider = new CreateProviderService();

        const provider = await createProvider.execute(data);

        return response.json(provider);
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

providersRouter.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = request.body;

        const updateProvider = new UpdateProviderService();

        const provider = await updateProvider.execute(id, data);

        return response.json(provider);
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

providersRouter.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const deleteProvider = new DeleteProviderService();

        await deleteProvider.execute(id);

        return response.status(200).json({ ok: true });
    } catch (err) {
        return response.status(400).json({ error: err });
    }
});

export default providersRouter;
