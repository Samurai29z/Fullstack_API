import React, { Component } from 'react'
import Reqres from './reqres'
// import ReqRes from './ReqRes'
import axios from 'axios'

export default class PutReq extends Component {

    constructor(props) {
        super(props)

        this.state = {
            url: '',
            id: '',
            wins: '',
            losses: '',
            points: '',
            first: '',
            last: '',
            age: '',
            output: [],
            message: ''
        }
        this.handleIdChange = this.handleIdChange.bind(this)
        this.handleWinsChange = this.handleWinsChange.bind(this)
        this.handleLossesChange = this.handleLossesChange.bind(this)
        this.handlePointsChange = this.handlePointsChange.bind(this)
        this.handleFirstChange = this.handleFirstChange.bind(this)
        this.handleLastChange = this.handleLastChange.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleIdChange(event) {
        this.setState({
            id: event.target.value,
        })
    }

    handleWinsChange(event) {
        this.setState({
            wins: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }

    handleLossesChange(event) {
        this.setState({
            losses: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }

    handlePointsChange(event) {
        this.setState({
            points: event.target.value
        })
        this.setState({
            output: [],
            message: ''
        })
    }
    handleFirstChange(event) {
        this.setState({
            first: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }
    handleLastChange(event) {
        this.setState({
            last: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }
    handleAgeChange(event) {
        this.setState({
            age: event.target.value,
        })
        this.setState({
            output: [],
            message: ''
        })
    }

    handleSubmit() {

        var data = {
            "id": Number(this.state.id),
            "wins": Number(this.state.wins),
            "losses": Number(this.state.losses),
            "points_scored": Number(this.state.points),
            "first_name": `${this.state.first}`,
            "last_name": `${this.state.last}`,
            "age": Number(this.state.age)
        };

        var config = {
            method: 'put',
            url: `http://localhost:3000/api/v1/stats/${this.state.id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const self = this

        axios(config)
            .then(function (response) {
                self.setState({ output: response.data })
                this.setState({ message: 'reussi' })
            })
            .catch(function (error) {
                this.setState({ message: 'Not Found!' })
            });
        }


    render() {
        return (
            <div className="container">
                <div className="tabcontent" id="put">
                    <div className="f-section">
                        <InputEl
                            id={this.state.id}
                            wins={this.state.wins}
                            losses={this.state.losses}
                            points={this.state.points}
                            first={this.state.first}
                            last={this.state.last}
                            age={this.state.age}
                            handleIdChange={this.handleIdChange}
                            handleWinsChange={this.handleWinsChange}
                            handleLossesChange={this.handleLossesChange}
                            handlePointsChange={this.handlePointsChange}
                            handleFirstChange={this.handleFirstChange}
                            handleLastChange={this.handleLastChange}
                            handleAgeChange={this.handleAgeChange}
                        />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <button onClick={this.handleSubmit} id='btn2'>Send</button>
                </div>
                <Reqres
                    output={this.state.output.length === 0 ? this.state.message
                        : this.state.output.map(item =>
                            <div key={item.id}>
                                <p><b>Id:</b> {item.id} </p>
                                <p><b>Wins:</b> {item.wins} </p>
                                <p><b>Losses:</b> {item.losses} </p>
                                <p><b>Points Scored:</b> {item.points_scored} </p>
                                <p><b>First_name:</b> {item.first_name} </p>
                                <p><b>Last_name:</b> {item.last_name} </p>
                                <p><b>Age:</b> {item.age} </p>
                                <hr />
                            </div>
                        )}
                />
            </div>
        )
    }
}


class InputEl extends Component {
    render() {
        return (
            <div className="f-section">
                <input type="number" min="1" placeholder="Id"
                    value={this.props.id}
                    onChange={this.props.handleIdChange} /><br/>
                <input type="number" min="1" placeholder="Wins"
                    value={this.props.wins}
                    onChange={this.props.handleWinsChange} /><br/>
                <input type="number" min="1" placeholder="Losses"
                    value={this.props.losses}
                    onChange={this.props.handleLossesChange} /><br/>
                <input type="number" min="1" placeholder="Points scored"
                    value={this.props.points}
                    onChange={this.props.handlePointsChange} /><br/>
                <input type="name" min="1" placeholder="First name"
                    value={this.props.first}
                    onChange={this.props.handleFirstChange} /><br/>
                <input type="name" min="1" placeholder="Last name"
                    value={this.props.last}
                    onChange={this.props.handleLastChange} /><br/>
                <input type="number" min="1" placeholder="Age"
                    value={this.props.age}
                    onChange={this.props.handleAgeChange} />     
            </div>
        )
    }
}