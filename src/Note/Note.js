import React from 'react';
import './Note.css';

export default class Note extends React.Component {
    render() {
        return (
            <div>
                <h2>Note Title</h2>
                <p>Date Modified</p>
                <button>Delete Note</button>
            </div>
        )
    }
}