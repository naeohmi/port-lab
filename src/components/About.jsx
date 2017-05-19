import React, { Component } from 'react';
import '../App.css';
class About extends Component {
    constructor(props) {
        super(props);
    }
    about(){
        return (
            <div className="About">
            <ul>
            <li><h1>Naomi</h1></li>
            <li><h2>Tech Impact</h2></li>
            <li><h1>Francheska</h1></li>
            <li><h2>perscholas</h2></li>
            <li><h1>Esraa</h1></li>
            <li><h2>perscholas</h2></li>
            </ul>
            </div>
        )
    }
    render() {
        return (
            this.about()
        )
    }
}
export default About;