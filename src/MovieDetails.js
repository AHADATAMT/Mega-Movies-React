import React, { Component } from 'react'
import Poster from "./Poster";

export default class MovieDetails extends Component {

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render() {
        let { poster_path, budget, genres, release_date, title, vote_count, vote_average, tagline, overview, revenue } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <Poster poster_path={poster_path} title={title} />
                        </div>
                        <div className="col-7">
                            <div className="title mb-5">
                                <h3>{title} <small>({(new Date(release_date)).getFullYear()})</small></h3>
                                <h6>{tagline}</h6>
                            </div>
                            <div className="detail">
                                <p><b>Genres:</b> {genres === undefined ? '' : genres.map(genre => genre.name).join(', ')}</p>
                                <p><b>Rate: </b><b>{vote_average}</b>/10 <small>({vote_count === undefined ? '' : this.formatNumber(vote_count)} votes)</small> </p>
                                <p><b>Budget:</b> ${budget === undefined ? '' : this.formatNumber(budget)}</p>
                                <p><b>Revenue:</b> ${revenue === undefined ? '' : this.formatNumber(revenue)}</p>
                                <p><b>Overview:</b></p>
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
