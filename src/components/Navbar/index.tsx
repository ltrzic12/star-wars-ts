import { Link } from 'react-router-dom';

const Navbar = (props: any): JSX.Element => {
    const { specieName, userName } = props;
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand">
                    {specieName && (
                        <img
                            src={require('../../assets/images/' + specieName.toLowerCase() + '.jpeg')}
                            alt=""
                            width={30}
                            height={30}
                            className="d-inline-block align-top me-2"
                        />
                    )}
                    {userName}
                </a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to={'/specie/human'} className="nav-link">
                                Human
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/specie/droid'} className="nav-link">
                                Droid
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/specie/wookie'} className="nav-link">
                                Wookie
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <Link to={'/'} className="nav-link">
                            Home
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
