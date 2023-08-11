import Loader from '../components/Loader';
import Species from '../components/Species';
import { TAppState } from '../helpers/types/TAppState';

const Home = ({ isLoad, species }: TAppState): JSX.Element => {
    if (!isLoad) {
        return <Loader />;
    }

    return <Species species={species} />;
};

export default Home;
