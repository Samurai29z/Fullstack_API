import React, { useState } from "react";
import Djam from "./components/api/Vue";
import "./App.css";
import Getrequest from './components/request/getrequest';
// import Reqres from './components/request/reqres';
import AllStats from './components/request/allgetrequest';
import PutReq from './components/request/updaterequest';
import PostReq from './components/request/posrequest';
import DelReq from './components/request/deleterequest'




function App() {

  // const [count, setCount] = useState(0);

  // const display = (i) => {
  //   setCount(i)
  // }

  const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }


  return (

    <div id="fond">
<div className="forms" >
    <div className="tab">
        <Djam />
      <div className="flex">
        <div className={toggleState === 0 ? "w100 active" : "w100"} onClick={() => toggleTab(0)}>
            <button className="tablinks" id="btn1">List</button>
        </div>
        <div className={toggleState === 1 ? "w100 active" : "w100"} onClick={() => toggleTab(1)}>
            <button className="tablinks" id="btn1">Get</button>
        </div>
        <div className={toggleState === 2 ? "w100 active" : "w100"} onClick={() => toggleTab(2)}>
            <button className="tablinks" id="btn1">Add</button>
        </div>
        <div className={toggleState === 3 ? "w100 active" : "w100"} onClick={() => toggleTab(3)}>
            <button className="tablinks" id="btn1">Update</button>
        </div>
        <div className={toggleState === 4 ? "w100 active" : "w100"} onClick={() => toggleTab(4)}>
            <button className="tablinks" id="btn1">Delete</button>
        </div>
      </div>
    </div>
</div>
<div className="w100" id="position">
    <div className={toggleState === 0 ? "display" : "none"}>
        <AllStats />
    </div>
    <div className={toggleState === 1 ? "display" : "none"}>
        <Getrequest />
    </div>
    <div className={toggleState === 2 ? "display" : "none"}>
        <PostReq />
    </div>
    <div className={toggleState === 3 ? "display" : "none"}>
        <PutReq />
    </div>
    <div className={toggleState === 4 ? "display" : "none"} >
        <DelReq />
    </div>
</div>






      {/* premiere page
      <div className={count === 0 ? "display" : "none"}>
        <Djam />
        <button onClick={() => display(2)} className="btn1"  >
          post
        </button>
        <button onClick={() => display(3)} className="btn2" >GET</button>
      </div> */}

      
      {/* deuxieme page */}
       {/* <div className={count === 2 ? "display" : "none"} id="page2" >
        <p>FTF ADD YOUR REQUEST</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <PutReq />
      </div> */}


      {/* troisieme page */}
      {/* <div className={count === 3 ? "display" : "none"}>
        <p className="container" id="titre">LISTE DES JOUEUR</p>
      <Getrequest />
      <Reqres />
      <AllStats />
      </div> */}

     
        
    </div>

  );
}

export default App;