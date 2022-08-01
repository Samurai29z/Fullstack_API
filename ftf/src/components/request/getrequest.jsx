import React, { Component } from 'react'
import ReqRes from './reqres.jsx'
import axios from 'axios'

export class Getrequest extends Component {
    // Constructor props for GetReq(Accessoires de constructeur pour GetReq)
    constructor(props) {
        super(props)

        this.state = {
            statInput: '',
            url: '',
            stat: [],
            message: ''
        }
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    // function to send the request(fonction pour envoyer la demande)
    handleEnter() {
        this.handleGet(this.state.url)
    }
    // Function that retrieves request values(la requestFunction qui récupère les valeurs de la requête)
    handleChange(event) {
        this.setState({
            statInput: event.target.value
        });
        this.setState((state) => ({
            url: `http://localhost:8080/api/v1/stats/${state.statInput}`
        }))
        this.setState({
            stat: [],
            message: ''
        })
    };
    // Function containing the axios request function(Fonction contenant la fonction de requête axios)
    handleGet(url) {

        var self = this

        axios.get(url)
            .then((res) => {
                self.setState({ stat: res.data });
            })
            .catch(err => {
                self.setState({ message: "404! faux" });
            })
    }

    render() {

        return (
            <div className='container'>
                <div className="tabcontent" id="get">
                    {/* Getting and auto update the input value */}
                    <Input input={this.state.statInput} handleChange={this.handleChange} />
                    {/* This button will execute the send the request */}
                    <button id="sendGet" onClick={this.handleEnter} className='btn2'>Send</button>
                </div>
                {/* Rendering section */}
                <ReqRes
                    output={
                        // Rendering the output
                        this.state.stat.length === 0 ? this.state.message 
                         :
                        this.state.stat !== [] ? this.state.stat.map(item =>
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
                        )
                        :  ''
                    }
                />
            </div>
        )
    }
}

export default Getrequest


// Class Of the input elements
class Input extends Component {
    render() {
        return (
            // Input Elements
            <input type="number" min="0" placeholder="Id"
                value={this.props.input}
                onChange={this.props.handleChange}
            />
        )
    }
}