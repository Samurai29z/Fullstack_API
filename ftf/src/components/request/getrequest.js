// import React, { Component } from 'react'
// import axios from 'axios'

//  class Get extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       result: [],
//       message: 'Click on button',
//       inputValue: '',
//       id: Number()
//     }
//     this.handleGet = this.handleGet.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     })
//   }

//   handleGet() {

//     this.setState({
//       result: [],
//       message: ''
//     })

//     var config = {
//       method: 'get',
//       url: `http://localhost:3000/api/v1/stats/${this.state.inputValue}`,
//       headers: {}
//     };

//     const self = this

//     axios(config)
//       .then(function (response) {
//         console.log(response.data);
//         self.setState({
//           result: response.data
//         })
//       })
//       .catch(function (error) {
//         console.log(error);
//         self.setState({
//           message: JSON.stringify(error.response.statusText)
//         })
//       });

//   }

//   render() {
//     return (
//       <div style={{
//         maxWidth: '500px',
//         marginInline: 'auto'
//       }} >
//         <h1>Test</h1>

//         <table>
//           <caption>
//             Elements
//           </caption>
//           <tbody>
//             <tr>
//               <td>Id</td>
//               <td>Wins</td>
//               <td>Losses</td>
//               <td>Points_scored</td>
//             </tr>
//             {this.state.result.map(item =>
//               <tr key={item.id} >
//                 <td> {item.id} </td>
//                 <td> {item.wins} </td>
//                 <td> {item.losses} </td>
//                 <td> {item.points_scored} </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         <p style={{
//           marginTop: 100
//         }}
//         > {this.state.message} </p>

//         <button style={{
//           marginTop: 100
//         }} onClick={this.handleGet} >Click</button>
//         <input type='number' value={this.state.inputValue} onChange={this.handleChange} />
//       </div>
//     )
//   }
// }
// export default Get
 


import React, {Components} from "react";
import axios from "axios";

class Get extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      result: []
    }
  }

  handleGet() {

  
    var config = {
      method: 'get',
      url: 'localhost:8080/api/v1/stats',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  render() {
    return (
      <div className="container">
        <table class="table">
        <caption>
            Elements
          </caption>
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Wins</th>
      <th scope="col">Losses</th>
      <th scope="col">Points_scored</th>
      <th scope="col">First_name</th>
      <th scope="col">Last_name</th>
      <th scope="col">Age</th>
      <th scope="col">UPDATE</th>
      <th scope="col">DELETE</th>

    </tr>
  </thead>
  <tbody>
  {this.state.result.map(item =>
              <tr key={item.id} >
                <td> {item.id} </td>
                <td> {item.wins} </td>
                <td> {item.losses} </td>
                <td> {item.points_scored} </td>
                <td> {item.First_name} </td>
                <td> {item.Last_name} </td>
                <td> {item.Age} </td>
                <td> {item.update} </td>
                <td> {item.delete} </td>
              </tr>
            )}
  </tbody>
</table>

        <p> {this.state.message} </p>
        <button onClick={Get} >Click</button>
       
      </div>
    )
  }
}

export default Get

