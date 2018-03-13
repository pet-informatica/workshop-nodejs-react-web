import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostRow extends Component {

    render() {
        const { _id, title, text, comments } = this.props.post

        return (
            <div>
                <hr/>
                <h3><Link to={`/post/${_id}`}>{title}</Link></h3>
                <p>{text}</p>
                <small><i>{`${comments.length} comments...`}</i></small>
            </div>
        )
    }

}