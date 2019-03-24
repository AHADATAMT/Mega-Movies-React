import React, { Component } from 'react'
import PageBtn from './PageBtn'

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            currentPageArr: [
                1, 2, 3, 4, 5
            ],
        }
    }

    nextPage = index => {
        if (this.state.currentPage + index === 0 ||
            this.state.currentPage === this.state.totalPage)
            return false;
        this.setState({
            currentPage: this.state.currentPage + index
        }, () => {
            this.props.goTo(this.state.currentPage);
            this.nextFrame();
        });
    }

    choosePage = page => {
        this.setState({
            currentPage: page
        }, () => {
            this.props.goTo(this.state.currentPage);
            this.nextFrame();
        });
    }
    nextFrame = () => {
        let page = this.state.currentPage;
        if (page === 1 || page === 2)
            return;

        let currentPageArr = this.state.currentPageArr;
        this.setState({
            currentPageArr: currentPageArr.map(num => {
                return num + (currentPageArr.indexOf(page) - 2);
            })
        });
    }
    render() {
        let prevBtnDisable = this.state.currentPage <= 1 ? 'disableClick page-btn' : 'page-btn';
        let classNameDisable = this.state.currentPage >= this.state.totalPage ? 'disableClick page-btn' : 'page-btn';
        return (
            <div className="text-center d-xl-flex flex-wrap">
                <a id="prevBtn" className={prevBtnDisable} href="#! " onClick={() => this.nextPage(-1)}>
                    <i className="fas fa-arrow-circle-left"></i>
                </a>
                <br className="d-block d-xl-none" />
                {this.state.currentPageArr.map((page, index) =>
                    <PageBtn key={index} {... this.state} index={index} pageNum={page} choosePage={this.choosePage} />
                )}
               
                {/* <a className="page-btn" href="#!" onClick={() => this.props.goTo(this.props.total_pages)}>{this.props.total_pages}</a> */}
                <br className="d-block d-xl-none" />
                <a id="nextBtn" className={classNameDisable} href="#!" onClick={() => this.nextPage(1)}>
                    <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div>
        )
    }
}