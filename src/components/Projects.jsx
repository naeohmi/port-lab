import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    projects(){
        return (
            <div className="projects">
                <h1>Look at our incredible Projects! :D</h1>
                <ul>
                    <li><a href="#">Project 1</a></li>
                        <a href="/portfolio/:id"><img src="http://placehold.it/350x150" /></a>

                    <li><a href="#">Project 2</a></li>
                        <a href="/portfolio/:id"><img src="http://placehold.it/350x150" /></a>

                    <li><a href="#">Project 3</a></li>
                        <a href="/portfolio/:id"><img src="http://placehold.it/350x150" /></a>

                    <li><a href="#">Project 4</a></li>
                        <a href="/portfolio/:id"><img src="http://placehold.it/350x150" /></a>
                </ul>
            </div>
        )
    }
    render() {
        return (
            this.projects()
        )
    }
}
export default Projects;