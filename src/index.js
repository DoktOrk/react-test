import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Storybox from './Component1';
import CommentBox from './CommentBoxComponent';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Storybox/>, document.getElementById("story-app"));
ReactDOM.render(<CommentBox/>, document.getElementById("commentBox"));