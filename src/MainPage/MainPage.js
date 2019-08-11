import React from 'react';
import NoteList from '../NoteList/NoteList';
import FolderList from '../FolderList/FolderList';

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <NoteList />
                <FolderList />
            </div>
        )
    }
}