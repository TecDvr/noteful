import React from 'react';
import NotefulContext from '../NotefulContext';
import { Route, NavLink } from 'react-router-dom';

export default class Note extends React.Component {
    static contextType = NotefulContext;

    deleteNote() {
        fetch(`http://localhost:9090/notes/cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        }
    

    render() {
        return (
            <div>
                {this.context.notes.filter(note=>note.id === this.props.id).map(note => {
                return (
                    <div>
                        <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>
                        <p>Last modified: {note.modified}</p>
                        <Route path='/note' render={() => <p>{note.content}</p>}/>
                        <button onClick={() => this.deleteNote()}>Delete</button>
                    </div>)
                })}
            </div>
        )
    }
}

/* {(this.props.history.location.pathname == '/') ? <p></p> : <p>{note.content}</p>} */