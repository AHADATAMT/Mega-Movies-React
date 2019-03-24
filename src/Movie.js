import React, { Component } from 'react'
import Header from './Header';
import MovieDetails from './MovieDetails';

export default class Movie extends Component {
   
    componentWillMount() {
        this.getMovieDB();
    }

    getMovieDB = async () => {
        const api_key = '24a6dd0cb86858abd356f876cfedaaca';
        let movieId = this.props.match.params.id;
        try {
            let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`;

            let response = await fetch(apiUrl);
            if (response.status === 200) {
                let data = await response.json();
                console.log(data);
                this.setState({
                    ...data
                })
            }
        } catch (err) {
            alert(err);
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <MovieDetails {...this.state} />
            </div>
        )
    }
}
