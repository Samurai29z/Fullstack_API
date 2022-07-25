import React, { useState } from "react";
import Djam from "./components/api/Vue";
import "./App.css";
// import Get from "./components/request/getrequest";

function App() {

  const [count, setCount] = useState(0);

  const display = (i) => {
    setCount(i)
  }

// const getid = () => {
//   Get.handleget()
// }


  return (

    <div>
      <div className={count === 0 ? "display" : "none"}>
        <Djam />
        <button onClick={() => display(2)} className="btn1"  >
          search
        </button>
        {/* <button onclick={this.getid}>GET</button> */}
      </div>
       <div className={count === 2 ? "display" : "none"} id="page2" >
        <p>FTF ADD YOUR REQUEST</p>
        <button onClick={() => display(3)} className="btn">
          GET
        </button>
        <button onClick={() => display(4)} className="btn">
          POST
        </button>
        <button onClick={() => display(3)} className="btn">
          DELETE
        </button>
        <button onClick={() => display(3)} className="btn">
          PUT
        </button>
        <div className="form">
          <form>
            <input type="id" placeholder="identifiant du joueur" className="input1" ></input>
            <input type="url" placeholder="url du joueur" className="input2"></input>
            <button onclick={this.handleget}>GET</button>
          </form>
        </div>
      </div>
      <div className={count === 4 ? "display" : "none"}>
        <p>bienvenue</p>
      </div>
    </div>

  );
}

export default App;