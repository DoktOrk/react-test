import React, { Component } from 'react';

class Storybox extends Component{
    render(){
        const now = new Date();
        const topicsList = ["JS", "PHP", "Java"];
        return(
            <div>
                <h3>Testig Component Rendering</h3>

                <p>Testing Localtime:</p>
                <p className="lead">
                    Current time at loading: {now.toTimeString()}
                </p>

                <p>Testing List with map function:</p>
                <ul>
                    {topicsList.map(topic => <li>{topic}</li>)}
                </ul>
            </div>
        );
    }
}
export default Storybox;