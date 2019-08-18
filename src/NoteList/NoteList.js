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
                        {value.notes.map(() => <Note />)}
                        <button>Add A Note</button>
                    </div>
                )}
            </NotefulContext.Consumer>
        )
    }
}

