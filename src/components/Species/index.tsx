import { Link } from 'react-router-dom';
import { TSpecies } from '../../helpers/types/TSpecies';
import SpecieCard from './SpecieCard';

const Species = ({ species }: TSpecies): JSX.Element => {
    return (
        <div className="container mt-5">
            <div className="row">
                {species.map((specie, key) => (
                    <div className="col-4" key={key}>
                        <Link to={`specie/${specie.name.toLowerCase()}`}>
                            <SpecieCard specie={specie} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Species;
