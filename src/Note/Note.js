import React from 'react';
import NotefulContext from '../NotefulContext';
import { NavLink } from 'react-router-dom';

export default class Note extends React.Component {
    static contextType = NotefulContext;
    
    render() {

        

        return (
            <div>
                {this.context.notes.filter(note=>note.id === this.props.id).map(note => {
                return (
                    <div>
                        <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                        <p>Last modified: {note.modified}</p>
                        <p>{note.content}</p>
                        <button>Delete</button>
                    </div>)
                })}
            </div>
        )
    }
}