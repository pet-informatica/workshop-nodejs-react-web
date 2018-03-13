import React, { Component } from 'react'
import API from '../../../lib/api'

export default class AddComment extends Component {

    state = {
        name: '',
        comment: ''
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        const comment = {
            name: this.state.name,
            comment: this.state.comment
        }
        const { callback, postId } = this.props
        await API.request(`/posts/${postId}/comments`, 'POST', comment)
        callback(comment)
        this.setState({
            name: '',
            comment: ''
        })
    }

    handleName = (ev) => this.setState({name: ev.target.value})

    handleComment = (ev) => this.setState({comment: ev.target.value})

    render() {
        return (
            <div>
                <hr/>
                <h3>Add Comment</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleName}/>
                    </label>
                    <br/>
                    <label>
                        Comment:
                        <textarea cols="30" rows="10" value={this.state.comment} onChange={this.handleComment}></textarea>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}