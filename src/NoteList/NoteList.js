import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';

export default class NoteList extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(value) => (
                    <div>
                        {value.state.notes.map(note => <Note />)}
                        <button>Add Note</button>
                    </div>
                )}
            </NotefulContext.Consumer>
        )
    }
}

