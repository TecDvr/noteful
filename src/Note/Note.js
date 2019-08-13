import React from 'react';
import './Note.css';
import { NavLink, Link } from 'react-router-dom';

export default class Note extends React.Component {
    render() {
        return (
                 <div>
                    <NavLink to={`/notepage/${this.props.id}`}>{this.props.name}</NavLink>
                    <p>Modified on: {this.props.modified}</p>
                    <p>{this.props.content}</p>
                    <button>Delete Note</button>
                </div>
        )
    }
}