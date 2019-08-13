import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';

export default class NoteList extends React.Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note => <Note 
                    name={note.name}
                    modified={note.modified}
                    id={note.id}
                />)}
                <button>Add Note</button>
            </div>
        )
    }
}

