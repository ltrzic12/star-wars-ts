import Layout from '../../../hoc/Layout';

const SpecieTable = (props: any): JSX.Element => {
    const { specieName, specieVehicles } = props;
    console.log(specieVehicles);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">{specieName} vehicles</div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Model</th>
                                        <th>Manufacturer</th>
                                        <th>Cost in credits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specieVehicles.map((vehicle: any, index: number) => (
                                        <tr key={index}>
                                            <td>{vehicle.name}</td>
                                            <td>{vehicle.modle}</td>
                                            <td>{vehicle.manufacturer}</td>
                                            <td>{vehicle.cost_in_credits}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout(SpecieTable);
