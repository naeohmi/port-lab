import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    projects(){
        return (
            <div className="projects">
                <p>Project 1</p>
                <p>Project 2</p>
                <p>Project 3</p>
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