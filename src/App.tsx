import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ISpecie } from './helpers/interfaces/ISpecie';
import { TAppState } from './helpers/types/TAppState';
import Home from './pages/Home';
import Specie from './pages/Specie';
import { getSpecies } from './services/species';

export default class App extends Component<{}, TAppState> {
    state = {
        isLoad: false,
        species: [
            {
                name: '',
                classification: '',
                designation: '',
                language: '',
                people: [],
            },
        ],
    };

    componentDidMount(): void {
        const species: Promise<any> = getSpecies('Human', 'Droid', 'Wookie');

        species.then((species: Array<ISpecie>) => {
            const isLoad = true;
            this.setState({ isLoad, species });
        });
    }

    render(): JSX.Element {
        const { isLoad, species } = this.state;

        return (
            <Routes>
                <Route path="/" element={<Home isLoad={isLoad} species={species} />} />
                <Route path="/specie/:specieName" element={<Specie species={species} />} />
            </Routes>
        );
    }
}
