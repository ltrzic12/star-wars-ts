import { TSpecie } from '../../../helpers/types/TSpecie';
import './index.scss';

const SpecieCard = ({ specie }: TSpecie): JSX.Element => {
    return (
        <div className="card">
            <div className="card-header">
                <img
                    src={require('../../../assets/images/' + specie.name.toLowerCase() + '.jpeg')}
                    className="card-img-top"
                />
                <div className="card-img-overlay">
                    <div className="card-title">
                        <h2>{specie.name}</h2>
                    </div>
                </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Classification:</b>
                    {specie.classification}
                </li>
                <li className="list-group-item">
                    <b>Designation:</b>
                    {specie.designation}
                </li>
                <li className="list-group-item">
                    <b>Language:</b>
                    {specie.language}
                </li>
            </ul>
        </div>
    );
};

export default SpecieCard;
