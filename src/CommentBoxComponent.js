import React, { Component } from 'react';
import Comment from './CommentComponent';
import CommentForm from './commentFormComponent';

class CommentBox extends Component{
    constructor(){
        super();
        this.state = {
            showComments: false,
            comments: [
                {id:1, author: "user1", body: "randomtext1"}, {id:2, author: "user2", body: "randomtext2"} // you fetch this data normally from an API
            ]
        };
    }

    _getComments(){
        return this.state.comments.map((comment) => {
            return (<Comment author={comment.author} body={comment.body} key={comment.id}/>);
        });
    }
    
    _getCommentTitle(commentCount){
        if(commentCount === 0){
            return "No comments so far.";
        }else if(commentCount === 0){
            return "1 comment";
        }else{
            return `${commentCount} comments`;
        }
    }

    _handleClick(){
        this.setState({
            showComments: !this.state.showComments
        });
    }

    render(){
        const comments = this._getComments();
        let buttonText = "Show comments";
        let commentNodes;
        if (this.state.showComments){
            buttonText = "Hide comments";
            commentNodes = <div className="comment-list">{comments}</div>;
        }
        return(
            <div className="comment-box">
                <CommentForm addComment={this._addComment.bind(this)} />
                <h3>Comments</h3>
                <h4 className="comment-count">{this._getCommentTitle(comments.length)}</h4>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }

    _addComment(author, body){
        const comment = {
            id: this.state.comments.length + 1,
            author, 
            body
        };
        this.setState({comments: this.state.comments.concat([comment])});
    }
}
export default CommentBox;