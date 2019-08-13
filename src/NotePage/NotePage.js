import React from 'react';
import Note from '../Note/Note';

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }
    
    render() {
        return (
            <div>
                <button onClick={this.goBack}>Go Back</button>
                
                {this.props.folders.filter(folder => folder.id===this.props.match.params.id).map(folder => <h2>{folder.name}</h2> )}

                <div>
                    {this.props.notes.filter(note=>note.id === this.props.match.params.id).map(note => <Note 
                    id={note.id}
                    name={note.name}
                    modified={note.modified}
                    content={note.content}
                    />)}
                </div>

            </div>
        )
    }
}