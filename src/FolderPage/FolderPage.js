import React from 'react';
import './FolderPage.css';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';

export default class FolderPage extends React.Component {
    render() {
        return (
            <NotefulContext.Consumer>
                {(value) => (
                    <div>
                        {value.folders.filter(folder => folder.id===this.props.match.params.id).map(folder => <h2>{folder.name}</h2> )}
                        <div>
                            {value.notes.filter(note=>note.folderId === this.props.match.params.id).map(() => <Note />)}
                        </div>
                    </div>
                )}              
            </NotefulContext.Consumer>
        )
    }
}