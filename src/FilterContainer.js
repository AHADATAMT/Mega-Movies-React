import React, { Component } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import Pagination from './Pagination'

export default class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort_by: 'popularity.desc',
      year: { min: 2000, max: 2019 },
      rate: { min: 0, max: 10 },
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
      <div className="position-relative w-100">
        <div className="position-xl-fixed">
          <h2>Controller</h2>
          <div className="col-12 mb-4">
            <p><strong>Sort by</strong></p>
            <select id="sortByInput" onChange={this.onChangeSortByInput} value={this.state.sort_by}>
              <option value="popularity.desc">Popularity &#8595;</option>
              <option value="popularity.asc">Popularity &#8593;</option>
              <option value="vote_average.desc">Vote Average &#8595;</option>
              <option value="vote_average.asc">Vote Average &#8593;</option>
            </select>
          </div>
          <div className="col-12 mb-4">
            <p><strong>Year</strong></p>
            <InputRange
              maxValue={2019}
              minValue={2000}
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
          <div className="col-12">
            <p><strong>Pagination</strong></p>
            <Pagination total_pages={this.props.total_pages} goTo={this.props.goTo} />
          </div>
        </div>
      </div>
    )
  }
}
