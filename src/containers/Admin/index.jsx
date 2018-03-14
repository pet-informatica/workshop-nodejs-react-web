import React, { Component } from 'react'
import API from '../../lib/api'

export default class Admin extends Component {

    state = {
        _id: null,
        title: '',
        text: ''
    }

    async componentDidMount() {
        if (this.props.match.params.id) {
            const id = this.props.match.params.id
            const data = await API.request(`/posts/${id}`, 'GET')
            const post = await data.json()
            this.setState({
                _id: post._id,
                title: post.title,
                text: post.text
            })
        }
    }

    handleSubmit = async (ev) => {
        ev.preventDefault()
        let post = {
            title: this.state.title,
            text: this.state.text
        }
        if (this.state._id) {
            post._id = this.state._id
            await API.request(`/posts/${post._id}`, 'PUT', post)
        } else {
            await API.request('/posts', 'POST', post)
        }
        this.setState({
            title: '',
            text: ''
        })
        this.props.history.push('/')
    }

    handleTitle = (ev) => this.setState({title: ev.target.value})

    handleText = (ev) => this.setState({text: ev.target.value})

    render() {
        return (
            <div>
                <p>{`${this.state._id ? 'Update':'Create'} Post`}</p>
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
