import React, { useState } from "react";
import Djam from "./components/api/Vue";
import "./App.css";
import Getrequest from './components/request/getrequest';
import Reqres from './components/request/reqres';
import AllStats from './components/request/allgetrequest';
import PutReq from './components/request/updaterequest';



function App() {

  const [count, setCount] = useState(0);

  const display = (i) => {
    setCount(i)
  }


  return (

    <div>
      {/* premiere page */}
      <div className={count === 0 ? "display" : "none"}>
        <Djam />
        <button onClick={() => display(2)} className="btn1"  >
          post
        </button>
        <button onClick={() => display(3)} className="btn2" >GET</button>
      </div>

      
      {/* deuxieme page */}
       <div className={count === 2 ? "display" : "none"} id="page2" >
        <p>FTF ADD YOUR REQUEST</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PutReq />
      </div>


      {/* troisieme page */}
      <div className={count === 3 ? "display" : "none"}>
        <p className="container" id="titre">LISTE DES JOUEUR</p>
      <Getrequest />
      <Reqres />
      <AllStats />
      </div>

     
        
    </div>

  );
}

export default App;