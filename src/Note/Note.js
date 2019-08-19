import React from 'react';
import NotefulContext from '../NotefulContext';
import { Route, NavLink } from 'react-router-dom';

function deleteNoteRequest(noteId, callback) {
    fetch('http://localhost:9090/notes' + `/${noteId}`, {
        method: 'DELETE'
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => {
              throw error
            })
          }
          return res.json()
        })
        .then(data => {
          callback(noteId)
        })
        .catch(error => {
          console.error(error)
        })
}

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
                        <Route path='/note' render={() => <p>{note.content}</p>}/>
                        <button 
                            onClick={() => {
                                deleteNoteRequest(
                                    this.props.id,
                                    this.context.deleteNote,
                                )
                            }}
                        >
                        Delete</button>
                    </div>)
                })}
            </div>
        )
    }
}

/* {(this.props.history.location.pathname == '/') ? <p></p> : <p>{note.content}</p>} */