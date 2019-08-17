import React from 'react';
import './Note.css';
import { NavLink, Link } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

export default class Note extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(value) => (
                    <div>
                        <NavLink to={`/notepage/${value.state.id}`}>{value.state.name}</NavLink>
                        <p>Modified on: {value.state.modified}</p>
                        <p>{value.state.content}</p>
                        <button>Delete Note</button>
                    </div> 
                )}
            </NotefulContext.Consumer>
        )
    }
}