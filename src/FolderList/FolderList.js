import React from 'react';
import { Route, Link } from 'react-router-dom';
import Folder from '../Folder/Folder';
import './FolderList.css';

export default class FolderList extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.folderInfo}</p>
            </div>
        );
    }
}