import React, { Component } from 'react';
import '../index.css';

class Four_o_Four extends Component {
    constructor(props) {
        super(props);
    }
    home(){
        return (
            <div>
               <img src='https://media.giphy.com/media/BxWTWalKTUAdq/giphy.gif?response_id=591f184d5616461bc2a354a6” alt=“funny-gif' />
            </div>
        )
    }
    render() {
        return (
            this.home()
        )
    }
}
export default Four_o_Four;