import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Page2 extends Component {
    
    
    state = {
        data: null,
        name:null
      };
    
      componentDidMount() {
        this.callBackendAPI()
          .then(res => this.setState({ data: res.message,name:res.name }))
          .catch(err => console.log(err));
      }
        // fetching the GET route from the Express server which matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('/users');
        const body = await response.json();
        console.log(body)
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };
    
      render() {
        return (
          <div className="App">
            <p className="App-intro">{this.state.data}</p>
            <p>hello {this.state.name}</p>
          </div>
        );
      }
    }
    

export default Page2;
