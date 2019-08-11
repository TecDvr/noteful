import React from 'react';
import './NoteList.css';

export default class NoteList extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.noteInfo}</p>
            </div>
        )
    }
}

