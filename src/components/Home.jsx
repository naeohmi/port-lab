import React, { Component } from 'react';
import '../index.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    home(){
        return (
            <div>
                <h1>Welcome to our <span className="animated">Amazing</span> Portfolio!</h1>
            </div>
        )
    }
    render() {
        return (
            this.home()
        )
    }
}
export default Home;