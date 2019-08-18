import React from 'react';
import './Note.css';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

export default class Note extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(value) => (
                    <div>
                        <NavLink to={`/notepage/${value.notes.id}`}>{value.notes.name}</NavLink>
                        <p>Modified on: {value.notes.modified}</p>
                        <p>{value.notes.content}</p>
                        <button>Delete Note</button>
                    </div> 
                )}
            </NotefulContext.Consumer>
        )
    }
}