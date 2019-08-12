import React from 'react';
import './FolderPage.css';
import Folder from '../Folder/Folder';
import Note from '../Note/Note';

export default class FolderPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.folders.map(folder => <Folder 
                        name={folder.name}
                    />)}
                    <button>Add Folder</button>
                </div>
                <div>
                    {this.props.notes.map(note => <Note 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    />)}
                </div>
            </div>
        )
    }
}