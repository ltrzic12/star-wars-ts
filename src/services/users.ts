import { getResource } from '../adapters/xhr/axios';

export const getUser = async (url: string): Promise<any> => {
    if (!url) {
        return;
    }
    try {
        const response = await getResource(url);

        return response.data.name;
    } catch (error) {
        console.error(error);
    }
};
