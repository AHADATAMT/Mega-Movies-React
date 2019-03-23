import React, { Component } from 'react'

export default class PageBtn extends Component {
    render() {
        return (
            <a className={this.props.currentPage === this.props.pageNum ? 'currentPage page-btn' : 'page-btn'} href="#!" onClick={() => this.props.choosePage(this.props.pageNum)}>{this.props.pageNum}</a>
        )
    }
}
