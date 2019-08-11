import React from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import './FolderList.css';

export default class FolderList extends React.Component {

    render() {
        return (
            <div>
                {this.props.folders.map(folder => <Folder 
                   
                />)}
                <button>Add Folder</button>
            </div>
        );
    }
}