import React from 'react';
import './NoteList.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types';
import './NoteList.css';

export default class NoteList extends React.Component {
    static contextType = NotefulContext;
    render() {
        return (
                    <div className='noteList'>
                        {this.context.notes.map((note,index) => <Note key={`note-${index}`} id={note.id} {...this.props} />)}
                    </div> 
        )
    }
}

NoteList.propTypes = {
    id: PropTypes.number
};
