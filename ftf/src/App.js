import React, { useState } from "react";
import Djam from "./components/api/Vue";
import "./App.css";
import Get from "./components/request/getrequest";

function App() {

  const [count, setCount] = useState(0);

  const display = (i) => {
    setCount(i)
  }

const getid = () => {
  Get.handleget()
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
        <div className="form">
          <form>
            <input type="id" placeholder="identifiant du joueur" className="input1" ></input>
            <input type="url" placeholder="url du joueur" className="input2"></input>
          </form>
        </div>
      </div>


      {/* troisieme page */}
      <div className={count === 3 ? "display" : "none"}>
        <p className="container" id="titre">LISTE DES JOUEUR</p>
      <Get />
      </div>
    </div>

  );
}

export default App;