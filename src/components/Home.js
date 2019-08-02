import React, { Component } from 'react';
import '../App.js';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://ih1.redbubble.net/image.549165738.9634/flat,550x550,075,f.jpg" />
            </div>


        )

    }
}

export default Home;
