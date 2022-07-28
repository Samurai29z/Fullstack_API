import React, { Component } from 'react'

export default class ReqRes extends Component {

    render() {
        return (
            <div className="output">
                <h4><b>Response</b></h4>
                {this.props.output}
            </div>
        )
    }
}