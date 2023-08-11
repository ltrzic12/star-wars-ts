import { getResource } from '../adapters/xhr/axios';
import { API_SPECIES } from '../helpers/constants/swapiEndpoints';
import { ISpecie } from '../helpers/interfaces/ISpecie';

export const getSpecies = async (...speciesParams: Array<string>): Promise<any> => {
    const species: Array<ISpecie> = [];
    const fillSpecies = (specieObject: any): void => {
        if (specieObject) {
            species.push({
                name: specieObject.name,
                classification: specieObject.classification,
                designation: specieObject.designation,
                language: specieObject.language,
                people: specieObject.people,
            });
        }
    };

    try {
        if (speciesParams.length > 0) {
            for (const specie of speciesParams) {
                const response = await getResource(`${API_SPECIES}?search=${specie}`);

                fillSpecies(response?.data?.results[0]);
            }
        } else {
            const response = await getResource(API_SPECIES);

            for (const specieObject of response?.data?.results) {
                fillSpecies(specieObject);
            }
        }
    } catch (error) {
        console.error(error);
    }

    return species;
};
