import React, { Component } from 'react'

export default class Poster extends Component {
    render() {
        if (this.props.poster_path)
            return (
                <img className="card-img-top m-auto poster" src={'https://image.tmdb.org/t/p/w500' + this.props.poster_path} alt={this.props.title} />
            )
        else
            return (
                <div className="empty-poster text-center">
                    <h3 className="pt-5">BLANK POSTER</h3>
                </div>
            )
    }
}
