import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className={!this.props.isLoaded ? 'd-block text-center' : 'd-none'}>
                <h1 className="m-5">Loading. . . :)</h1>
            </div>
        )
    }
}
