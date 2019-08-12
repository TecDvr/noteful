import React from 'react';
import './Note.css';

export default class Note extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>Modified on: {this.props.modified}</p>
                <p>{this.props.id}</p>
                <button>Delete Note</button>
            </div>
        )
    }
}