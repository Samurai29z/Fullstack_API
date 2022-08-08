# Fullstack_API
Digitalisation des données de la FTF


# API-digitalisation-des-donnees-de-la-FTF

notre projet consiste a cree un API REST pour la gestion des statistiques des joueurs de l equipe nationnale de football

## **`PRE-REQUIS`**

 -  savoir installer node js
 - savoir installer nvm Node Version Manager
 -savoir installer npm Node Package Manager 
 -savoir utiliser le framework Express

 ## **`INSTALLATION`**

 - cliquez sur le lien **[Node.JS](https://nodejs.org/en/)** choisir la bonne version node adapter a votre machine, telecharger et intaller
 
 aller dans terminal taper `node --version` pour etre sur de l avoir installer et connaitre la version

 - installer npm : taper la commande `npm install download` pour installer
 
 `npm --version`  pour connaitre la version


 ## **`DEMARAGE`**

 - creer votre dossier sur le bureau ,l'ouvrir dans le terminal,
 `npm init` pour demarer l installation du package ,suivre les etapes en appuiyant (ENTER) a chaque fois
 - Installation du framework EXPRESS(**_npm install express body-parser morgan_**)
- creer un fichier index.js dans lequel on copie

```js
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.use(logger('tiny'));
app.use(bodyParser.json());

app.use('/', require(path.join(__dirname, 'routes')));

app.use((req, res, next) => {
  const err = new Error(`${req.method} ${req.url} Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});
}
```
- crée un dossier appeler ROUTES

- crée dans le dossier un fichier STATS.JSON

![This is an image](Capture28.png)
- crée un autre appelle STATS.JS
![This is an image](Capture49.png)
-ajouter le script suivant au fichier packages.json
```
 ("scripts": {
  "start": "node index.js"
},)
```
![This is an image](Capture55.png)
- executer la commande `npm start` dans le dossier
- on nous envera un message
(**_Express Server started on Port 3000 | Environment : development_**)
- l API est pret a etre tester avec POSTMAN une fois heberger sur HEROKU ou tester en local avec localhost
## **`test avc postman avec lien heroku`** 


  - POST https://playerstats-api.herokuapp.com/api/v1/stats 
    -  Cela créera les statistiques d'un joueur

    ```json
    // ce sont les exemples d'entrée
      {
        "id": 23,
        "wins": 8,
        "losses": 2,
        "points_scored": 7
      }
    // il renverra un fichier json comme celui-ci
      {
        "id": 23,
        "wins": 8,
        "losses": 2,
        "points_scored": 7
      }
    ```


  - GET https://playerstats-api.herokuapp.com/api/v1/stats/23 
    - Cela obtiendra les statistiques du joueur 23

    ```json
    // il renverra un fichier json comme celui-ci
      {
        "id": 23,
        "wins": 8,
        "losses": 2,
        "points_scored": 7
      }
    ```
    
  - PUT https://playerstats-api.herokuapp.com/api/v1/stats/23 
    - Cela mettra à jour les statistiques du joueur 101

    ```json
    // c'est l'entrée
      {
        "id": 23,
        "wins": 10,
        "losses": 3,
        "points_scored": 7
      }
    // il renverra un fichier json comme celui-ci
    {
        "id": 23,
        "wins": 10,
        "losses": 3,
        "points_scored": 7
      }
    ```

  - DELETE https://playerstats-api.herokuapp.com/api/v1/stats/23
    -  Cela supprimera les statistiques du joueur 101

    ```json
    // c'est l'entrée 
      {
        "id": 101,
        "wins": 10,
        "losses": 3,
        "points_scored": 7
      }
    // et il renverra un fichier json vide
    ```





## React.js frontend
1. Executez la commande ci-dessous à la racine de votre projet pour initialiser une application frontend avec le framework react.js. Le dossier client sera créé en même temps:

  ```sh
  npx create-react-app client
  ```
2. Dans le fichier package.json généré par npx create-react-app, ajoutez une propriété appelée proxy juste après le bloc "scripts". Cela nous permettra de faire des requetes à notre serveur node.js sans avoir à préciser l'adresse (http://localhost:3001) à chaque fois:

```json
"proxy": "http://localhost:3001",
```
3. Pour démarrer votre application react.js, naviguez sur le dossier client et exécutez la commande:
  ```sh
  npm start
  ```
  Si tout se passe bien votre console rendra ce résultat:
  ```sh
  Compiled successfully!

  You can now view client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.100:3000

  Note that the development build is not optimized.
  To create a production build, use npm run build.

  webpack compiled successfully
  ```
## Faire des requetes HTTP depuis React vers Node

Voyons comment récupérer des données à partir du endpoint "/api" que nous avons créé précédemment.
* Ouvrez le fichier App.js qui se trouve dans client/src et modifiez le code généré par défaut comme suit:

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
```

## Résultats:
* npm start sans avoir démarré le serveur:
![serveur-stop](server-stop.png)

* serveur démarré: on demare le serveur en naviguant dans le dossier client et en tapant la commande 
```sh
 npm start
 ```
![serveur-running](server-running.png)

## creer son propre front
1-dans le dossier 'src'creer un autre dossier appeller components ou on met les fichiers jsx
pour creer son propre front
2-creer le dossier 'api'
-un fichier '.jsx'
```js
import React from "react";
import award from "./images.png"
// import image from "./tof.jpeg"

const djam = () => {

    return (
        <div className="App-body">
            <nav className="navbar bg-light">
                <div className="container">
                    <img src={award} alt="" className="a-award-img" />
                    <p className="App-link">FEDERATION TOGOLAISE DE FOOTBALL</p>
                </div>
            </nav>
            {/* <div className="container">
                    <img src={image} alt="" className="a-image-img" />
            </div> */}

        </div>
    );
}

export default djam;
```
3-importer la fonction dans le fichier 'app.js'
```js
import React, { useState } from "react";
import Djam from "./components/api/Vue";
//la fonction est importer ici
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
        <Djam /> //la fonction a ete imbriquer ici
        
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
```
4-faire de meme pour toute les pages qu'on veut imbriquer dans notre APP
## DEPLOYEMENT
1-on deploi d abord le serveur sur heroku,ou netlify,ou .....etc
-entrer dans le dossier de notre serveur
 ```sh
git init
```
 ```sh
heroku login
```
- ca nous ammene vers le navigateur ou on appui login
 ```sh
git add .
```
 ```sh
git commit -m "first commit"
```
 ```sh
heroku create
```
 ```sh
git push heroku master
```
 ```sh
heroku open
```


2-on deploie l application react tout d abord on remplace tout les liens localhost par le lien de notre serveur heberger



```sh
 git init
 ```
```sh
 heroku login
 ```
- ca nous ammene vers le navigateur ou on appui login
```sh
 git add .
 ```
 ```sh
heroku buildpacks:set mars/create-react-app
```
```sh
git commit -m "first commit"
```
 ```sh
heroku create
```
```sh
 git push heroku master
 ```
 ```sh
heroku open
```


<!-- FEATURES -->
## Features

- [x] C3: Développer une interface utilisateur web dynamique
- [x] C6: Développer les composants d’accès aux données
- [x] C7: Développer la partie back-end d’une application web ou web mobile


<!-- LICENSE -->
## License

Distributed under the MIT License.


<!-- CONTACT -->
## Contact


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Express.js]: https://img.shields.io/badge/Express-20232A?style=for-the-badge&logo=express&logoColor=61DAFB
[Express-url]: https://expressjs.com
[Node.js]: https://img.shields.io/badge/Node.js-35495E?style=for-the-badge&logo=nodedotjs&logoColor=4FC08D
[Node-url]: https://nodejs.org/en/
[React.js]: https://img.shields.io/badge/React.js-000000?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://reactjs.org/