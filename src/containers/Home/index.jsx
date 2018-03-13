import React, { Component } from 'react'
import PostRow from './components/post-row'
import Loading from '../../components/Loading'
import API from '../../lib/api'

export default class Home extends Component {

    state = {
        loading: true,
        posts: []
    }

    async componentDidMount() {
        const data = await API.request('/posts', 'GET')
        const posts = await data.json()
        const loading = false
        this.setState({ loading, posts })
    }

    render() {
        if (this.state.loading)
            return (<Loading/>)

        return (
            <div>
                {this.state.posts.map(post => <PostRow key={post._id} post={post} />)}
            </div>
        )
    }

}
