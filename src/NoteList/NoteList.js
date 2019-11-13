import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';

export default class NoteList extends React.Component {
    static contextType = NotefulContext;
    render() {
        return (
                    <div>
                        {this.context.notes.map((note,index) => <Note key={`note-${index}`} id={note.id} {...this.props} />)}
                    </div> 
        )
    }
}

