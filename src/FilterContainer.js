import React, { Component } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

export default class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort_by: 'vote_average.desc',
      year: { min: 1990, max: 2019 },
      rate: { min: 0, max: 10 }
    };
  }

  onChangeInputYear = value => {
    this.setState({ year: value })
  }

  onChangeInputRate = value => {
    this.setState({ rate: value })
  }

  onChangeSortByInput = event => {
    this.setState({ sort_by: event.target.value })
  }

  SubmitFilterInfo = () => {
    this.props.handleFilter(this.state);
  }

  render() {
    return (
      <div>
        <h2>Filter</h2>
        <div className="col-12 mb-4">
          <p><strong>Sort by</strong></p>
          <select id="sortByInput" onChange={this.onChangeSortByInput} value={this.state.sort_by}>
            <option value="popularity.desc">Popularity: descending</option>
            <option value="popularity.asc">Popularity: ascending</option>
            <option value="vote_average.desc">Vote Average: descending</option>
            <option value="vote_average.asc">Vote Average: ascending</option>
          </select>
        </div>
        <div className="col-12 mb-4">
          <p><strong>Year</strong></p>
          <InputRange
            maxValue={2019}
            minValue={1990}
            value={this.state.year}
            onChange={value => this.onChangeInputYear(value)} />
        </div>
        <div className="col-12 mb-4">
          <p><strong>Rating</strong></p>
          <InputRange
            maxValue={10}
            minValue={0}
            value={this.state.rate}
            onChange={value => this.onChangeInputRate(value)} />
        </div>
        <div className="col-12 mb-3">
          <button onClick={this.SubmitFilterInfo}>
            Apply
          </button>
        </div>
      </div>
    )
  }
}
