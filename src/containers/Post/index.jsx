import React, { Component } from 'react'
import CommentRow from './components/comment-row'
import AddComment from './components/add-comment'
import API from '../../lib/api'
import Loading from '../../components/Loading'


export default class Post extends Component {

    state = {
        loading: true,
        post: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params
        const data = await API.request(`/posts/${id}`, 'GET')
        const post = await data.json()
        const loading = false
        this.setState({ loading, post })
    }

    addComment = (comment) => {
        let post = this.state.post
        post.comments.push(comment)
        this.setState({post})
    }

    handleDelete = async (id) => {
        await API.request(`/posts/${this.state.post._id}/comments/${id}`, 'DELETE')
        let post = this.state.post
        post.comments = post.comments.filter(comment => comment._id !== id)
        this.setState({post})
    }

    render() {
        if (this.state.loading)
            return (<Loading/>)

        const { title, text, author } = this.state.post

        return (
            <div>
                <hr/>
                <h1>{title}</h1>
                <p>{text}</p>
                <small><i>{author}</i></small>
            </div>
        )
    }

}
