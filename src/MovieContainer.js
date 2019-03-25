import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import  Poster from "./Poster";

export default class MovieContainer extends Component {

  limit = overview => {
    return overview.slice(0, 100) + '...';
  }

  render() {
    let { title, id, overview, vote_average, poster_path, release_date } = this.props;
    return (
      <div id={id} className="card mb-4 movie-card position-relative">
        <Poster poster_path={poster_path} title={title} />
        <div className="card-body position-absolute">
          <Link to={'/movie/' + id}><h5 className="card-title">{title}</h5></Link>
          <p className="card-text text-right d-flex justify-content-between">
            <span><b>Year</b> <br /> {(new Date(release_date)).getFullYear()}</span>
            <span><b>Rating</b> <br /> {vote_average}</span></p>
          <p className="card-text desc">{this.limit(overview)}</p>
        </div>
      </div>
    )
  }
}
