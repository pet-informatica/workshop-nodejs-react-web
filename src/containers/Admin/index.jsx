import React, { Component } from 'react'
import API from '../../lib/api'

export default class Admin extends Component {

    state = {
        title: '',
        text: ''
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        const post = {
            title: this.state.title,
            text: this.state.text
        }
        await API.request('/posts', 'POST', post)
        this.setState({
            title: '',
            text: ''
        })
    }

    handleTitle = (ev) => this.setState({title: ev.target.value})

    handleText = (ev) => this.setState({text: ev.target.value})

    render() {
        return (
            <div>
                <p>Create Post</p>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={this.state.title} onChange={this.handleTitle}/>
                    </label>
                    <br/>
                    <label>
                        Text:
                        <textarea cols="30" rows="10" value={this.state.text} onChange={this.handleText}></textarea>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}
