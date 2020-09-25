import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import ListaBusquedas from './ListaBusquedas';




class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "nada" ,
    data:null
    };
    }
    //https://still-plains-00092.herokuapp.com/daily api heroku
    callAPI() {
        //fetch("http://192.168.0.9:5000/daily")
        fetch("https://still-plains-00092.herokuapp.com/daily")
        .then(response => response.json())
        .then(data => this.setState({ data }))
           
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        console.log(this.state.data);
    }

    render() {

        
            return this.state.data == null ?(<div>Cargando.......</div>)
            : (
              <div>
              
              <ListaBusquedas  titulo="Titulo de la Lista de busquedas"
             nuevodato={this.state.data[0]}/>
                   
                    
                   
             </div>
            )         
            



        /* return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div>
                <p className="App-intro">{this.state.apiResponse}</p>
                </div>
            </div>
        ); */
    }
}

export default App;
