import { getResource } from '../adapters/xhr/axios';

export const getVehicles = async (url: string): Promise<any> => {
    try {
        const response = await getResource(url);

        return response.data.results;
    } catch (error) {
        console.log(error);
    }
};
