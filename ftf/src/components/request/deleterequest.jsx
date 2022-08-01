import axios from 'axios'
import React, { Component } from 'react'
import Reqres from './reqres'

export default class DelReq extends Component {

    constructor(props) {
        super(props)

        this.state = {
            statInput: '',
            url: '',
            stat: ''
        }
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // function to send the request
    handleEnter() {
        this.handleDel(this.state.url)
    }
    // Function that retrieves request values
    handleChange(event) {
        this.setState({
            statInput: event.target.value
        });
        this.setState((state) => ({
            url: `http://localhost:3000/api/v1/stats/${state.statInput}`
        }));
    };
    // Function containing the axios request function
    handleDel(url) {
        axios.delete(url)
            .then((res) => {
                this.setState({ stat: res.data + "Done" });
            })
            .catch(err => {
                this.setState({ stat: err.message });
            })
    }

    render() {
        return (
            <div className="container">
                <div className="tabcontent" id="delete">
                    <InputEl input={this.state.statInput} handleChange={this.handleChange} />
                    <button id="sendDelete" onClick={this.handleEnter} className='btn2'>Send</button>
                </div>
                <Reqres
                    output={
                        // Rendering the output
                        this.state.stat
                    }
                />
            </div>
        )
    }
}

class InputEl extends Component {
    render() {
        return (
            <input type="number" min="0" placeholder="Id"
                value={this.props.input}
                onChange={this.props.handleChange}
            />
        )
    }
}
