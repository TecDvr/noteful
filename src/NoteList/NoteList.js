import React from 'react';
import './NoteList.css';

export default class NoteList extends React.Component {
    render() {
        return (
            <div>
                <p>this is the note list</p>
                <p>{this.props.noteInfo}</p>
            </div>
        )
    }
}

