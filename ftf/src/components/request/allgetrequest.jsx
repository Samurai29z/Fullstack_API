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
            <div className='output'>
                <button onClick={this.handleEnter}>
                    {this.state.refresh}
                </button>
                <div className="eltDiv">
                    {// Rendering the output
                        this.state.output.length === 0 ? this.state.message
                            : this.state.output.map(item =>
                                <table key={item.id} className='container' id ="table">
                                    <tr scope="row"><th scope="col"><b>Id:</b></th><th scope="col">{item.id}</th></tr>
                                    <tr scope="row"><th scope="col"><b>Wins:</b></th><th scope="col">{item.wins}</th> </tr> 
                                    <tr scope="row"><th scope="col"><b>Losses:</b></th><th scope="col">{item.losses}</th> </tr> 
                                    <tr scope="row"><th scope="col"><b>Points Scored:</b></th><th scope="col">{item.points_scored}</th></tr> 
                                    <tr scope="row"><th scope="col"><b>First_name:</b></th><th scope="col">{item.first_name}</th></tr> 
                                    <tr scope="row"><th scope="col"><b>Last_name:</b></th><th scope="col">{item.last_name}</th></tr> 
                                    <tr scope="row"><th scope="col"><b>Age:</b></th><th scope="col">{item.age}</th></tr>
                                    <tr scope="row"><th scope="col"><button>modifier</button></th><th scope="col"><button>suprimer</button></th></tr>
                                    <hr />
                                </table>
                            )}
                </div>
            </div>
        )
    }
}
