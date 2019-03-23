import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class MovieContainer extends Component {

  limit = overview => {
    return overview.slice(0, 100) + '...';
  }

  render() {
    let { title, id, overview, vote_average, poster_path, release_date } = this.props;
    return (
      <div id={id} className="card mb-2">
          <img className="card-img-top m-auto" src={'https://image.tmdb.org/t/p/w500' + poster_path} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-right d-flex justify-content-between">
            <span><b>Year</b> <br /> {(new Date(release_date)).getFullYear()}</span>
            <span><b>Rating</b> <br /> {vote_average}</span></p>
          <p className="card-text">{this.limit(overview)}</p>
        </div>
      </div>
    )
  }
}
