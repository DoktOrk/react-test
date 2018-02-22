import React, { Component } from 'react';
import './commentFormComponent.css';

class CommentForm extends Component{

    _handleSubmit(event){
        event.preventDefault();
        const form = event.target
        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
        form.reset()
    }

    render(){
        return(
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <p>Testing the imported css:</p>
                <p>Testing the Form:</p>
                <label>Join the discussion!</label>
                <div className="comment-form-fields">
                    <input placeholder="Enter your name" ref={(input) => this._author = input} />
                    <textarea placeholder="Type your comment" ref={(textarea) => this._body = textarea} ></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">Post comment</button>
                </div>
            </form>
        );
    }
}
export default CommentForm;