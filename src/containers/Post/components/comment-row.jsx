import React, { Component } from 'react'

export default class CommentRow extends Component {

    render() {
        const { name, comment } = this.props.comment

        return (
            <div>
                <p><strong><i>{name}</i></strong></p>
                <p>{comment}</p>
            </div>
        )
    }

}