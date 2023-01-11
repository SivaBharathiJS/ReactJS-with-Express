import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from "react-router-dom"; 
class Page1 extends Component {

    constructor(props) {

        super(props);
    
         this.state = {
    
          make: "Yamaha",
    
          model: "R15",
    
          color: "blue"
    
        };
    
    }
    
    changeBikeColor = () => {
    
        this.setState({color: "black"});
    
    }
    
    render() {
    
        return (
    
          <div>
    
            <h2>My {this.state.make}</h2>
    
            <p>
    
              It is a {this.state.color}
    
              {this.state.model}.
    
            </p>
    
            <button
    
              type="button"
    
              onClick={this.changeBikeColor}
    
                >
                 Change color</button>
           
                   
                    <a href='/Page2/'>next</a>
          </div>
    
        );
    
    }
}

export default Page1;
