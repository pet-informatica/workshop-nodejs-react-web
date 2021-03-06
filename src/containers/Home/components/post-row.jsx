import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostRow extends Component {

    render() {
        let { _id, title, text } = this.props.post
        if (text.length > 500)
            text = text.substring(0, 500) + '...'
        return (
            <div>
                <hr/>
                <h3><Link to={`/post/${_id}`}>{title}</Link></h3>
                <p>{text}</p>
                <div>
                    <small><Link to={`/admin/${_id}`}>Edit</Link></small>
                    <small><button onClick={() => this.props.handleDelete(_id)}>Delete</button></small>
                </div>
            </div>
        )
    }

}