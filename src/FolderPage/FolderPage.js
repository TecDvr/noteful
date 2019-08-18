import React from 'react';
import './FolderPage.css';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

export default class FolderPage extends React.Component {
    static contextType = NotefulContext;
    render() {
        return ( 
            <div>
                {this.context.folders.filter(folder => folder.id===this.props.match.params.id).map(folder => <h2>{folder.name}</h2> )}
                <div className="note-item">
                    {this.context.notes.filter(note=>note.folderId === this.props.match.params.id).map(note => <NavLink to={`/note/${note.id}`}>{note.name}</NavLink>)}
                </div>
            </div>
        )
    }
}