import React, { Component } from 'react'
import FilterContainer from './FilterContainer'
import MovieContainer from './MovieContainer'
import Loading from './Loading'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterInput: {
                sort_by: 'popularity.desc',
                page: 1,
                release_date: { min: 2000, max: 2019 },
                vote_average: { min: 0, max: 10 }
            },
            page: 1,
            movies: [],
            total_pages: 0,
            total_results: 0,
            isLoaded: false,
        }
    }

    componentWillMount() {
        this.getMovieDB();
    }

    getMovieDB = async () => {
        const api_key = '24a6dd0cb86858abd356f876cfedaaca';
        let { sort_by, page, release_date, vote_average } = this.state.filterInput;
        let queryString = `sort_by=${sort_by}&api_key=${api_key}&page=${page}&release_date.gte=${release_date.min}-01-01&release_date.lte=${release_date.max}-01-01&vote_average.gte=${vote_average.min}&vote_average.lte=${vote_average.max}`;
        try {
            let apiUrl = 'https://api.themoviedb.org/3/discover/movie?' + queryString;

            let response = await fetch(apiUrl);
            if (response.status === 200) {
                let data = await response.json();
                console.log(data.results);

                this.setState({
                    page: data.page,
                    movies: data.results,
                    total_pages: data.total_pages,
                    total_results: data.total_results,
                });
            }
            this.setState({ isLoaded: true })
        } catch (err) {
            alert(err);
        }
    }

    handleFilter = filterInput => {
        this.setState({
            filterInput: {
                ...this.state.filterInput,
                release_date: filterInput.year,
                vote_average: filterInput.rate,
                sort_by: filterInput.sort_by,
            },
            isLoaded: false
        }, () => this.getMovieDB());
    }
    goTo = page => {
        this.setState({
            filterInput: { ...this.state.filterInput, page: page },
            isLoaded: false
        }, () => {
            this.getMovieDB();
        })
    }
    render() {
        
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-4 col-xl-3">
                        <FilterContainer handleFilter={this.handleFilter} total_pages={this.state.total_pages} goTo={this.goTo} />
                    </div>
                    <div className="col-12 col-sm-8 col-xl-9">
                    
                        <Loading isLoaded={this.state.isLoaded} />
                        <div className={this.state.isLoaded ? 'row' : 'invisible'}>
                            {this.state.movies.map((movie, index) => (
                                <div className="col-sm-6 col-xl-3 col-lg-4" key={index}>
                                    <MovieContainer key={index} {...movie} />
                                </div>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
