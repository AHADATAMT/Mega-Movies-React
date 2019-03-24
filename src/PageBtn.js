import React, { Component } from 'react'
import { spawn } from 'child_process';

export default class PageBtn extends Component {
    render() {
        let PageBtnClass = this.props.currentPage === this.props.pageNum ? 'currentPage page-btn' : 'page-btn';
        if (this.props.index === 4)
            return (
                <span> <span className="py-2">...</span> <a className={PageBtnClass} href="#!" onClick={() => this.props.choosePage(this.props.pageNum)}>{this.props.pageNum}</a></span>
            )
        else
            return <a className={PageBtnClass} href="#!" onClick={() => this.props.choosePage(this.props.pageNum)}>{this.props.pageNum}</a>

    }
}
