import React, { Component } from 'react'
import axios from 'axios'






export default class AllStats extends Component {

    constructor(props) {
        super(props)

        this.state = {
            output: [],
            url: '',
            message: '',
            refresh: 'decouvrir les joueuses'
        }

        this.handleRefresh = this.handleRefresh.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleEnter() {
        this.handleRefresh()
    }

    handleRefresh() {

        this.setState({
            refresh: 'Refresh'
        })

        var self = this

        axios.get("http://localhost:8080/api/v1/stats")
            .then(function (response) {
                self.setState({
                    output: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
                self.setState({
                    message: 'Connection Error! Please Refresh'
                })
            });
    }

    render() {
        return (
            <div className='container'>
                <button onClick={this.handleEnter} id='btn2'>
                    {this.state.refresh}
                </button>
                <div className="eltDiv">
                    {// Rendering the output
                        this.state.output.length === 0 ? this.state.message
                            : this.state.output.map(item =>
                                <table key={item.id} className='container' id ="table">
                                    <p><b>Id:</b> {item.id} </p>
                                    <p><b>Wins:</b> {item.wins} </p>
                                    <p><b>Losses:</b> {item.losses} </p>
                                    <p><b>Points Scored:</b> {item.points_scored} </p>
                                    <p><b>First_name:</b> {item.first_name} </p>
                                    <p><b>Last_name:</b> {item.last_name} </p>
                                    <p><b>Age:</b> {item.age} </p>
                                    <button>modifier</button><button onClick={this.handleEnter}>suprimer</button>
                                    <hr />
                                </table>
                            )}
                </div>
               
            </div>
        )
    }
    
  }

