import React, { Component } from 'react'
import Header from './Header';
import MovieContainer from './MovieContainer'
import Pagination from './Pagination'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            query: '',
            page: 1,
            total_pages: 0,
            total_results: 0,
            results: []
        }
    }
    componentWillMount() {
        this.getMovieDB();
    }

    getMovieDB = async () => {
        const api_key = '24a6dd0cb86858abd356f876cfedaaca';
        let query = this.props.match.params.q;
        let currentPage = this.state.currentPage;
        console.log(query);
        try {
            let apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${currentPage}`;

            let response = await fetch(apiUrl);
            if (response.status === 200) {
                let data = await response.json();
                console.log(data);
                this.setState({
                    ...data,
                    query: query
                }, () => console.log(this.state))
            }
        } catch (err) {
            alert(err);
        }
    }
    goTo = page => {
        this.setState({
            currentPage: page,
        }, () => {
            this.getMovieDB();
        })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mt-5">Search Results for "{this.state.query}"</h1>
                            <h6 className="mb-5">About {this.state.total_results} results</h6>
                        </div>
                        <div className="row">
                            {this.state.results.map((movie, index) => (
                                <div className="col-xl-3 col-lg-4" key={index}>
                                    <MovieContainer {...movie} />
                                </div>)
                            )}
                        </div>
                        <div className="col-12">
                            <Pagination total_pages={this.state.total_pages} goTo={this.goTo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
