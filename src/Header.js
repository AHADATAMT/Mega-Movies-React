import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4">
          <h3 className="navbar-brand">MEGA MOVIE</h3>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline ml-auto">
              <div className="md-form my-0">
                <input id="searchInput" className="form-control" type="text" placeholder="Search" aria-label="Search" />
              </div>
              <button id="searchBtn" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
  }
}
