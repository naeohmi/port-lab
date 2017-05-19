import React, { Component } from 'react';
import Projects from './Projects.jsx';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    portfolio(){
        return (
            <div className="portfolio">
                <Projects />
                
            </div>
        )
    }
    render() {
        return (
            this.portfolio()
        )
    }
}
export default Portfolio;