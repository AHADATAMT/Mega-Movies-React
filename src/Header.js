import React, { Component } from 'react'
import { Link, Route } from "react-router-dom";


export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }
  }
  handleSearchInput = e => {
    let value = e.target.value;
    console.log(value);
    this.setState({
      searchString: value
    })
  }

  render() {
    return (
      <div>
    
        <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4">
          <Link to={'/'}><h3 className="navbar-brand">MEGA MOVIE</h3></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline ml-auto">
              <div className="md-form my-0">
                <input id="searchInput" className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleSearchInput} />
              </div>
              <SearchBtn searchString={this.state.searchString} />
            </form>
          </div>
        </nav>
      </div>
    )
  }
}
const SearchBtn = (props) => (
  <Route render={({ history }) => (
    <button
      id="searchBtn"
      className="btn btn-outline-white btn-md my-0 ml-sm-2"
      type='submit'
      onClick={() => { history.push('/'); history.push('/search/q=' + props.searchString); }} // don't know why
    >
      Search
    </button>
  )} />
)
