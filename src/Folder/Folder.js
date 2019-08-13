import React from 'react';
import { NavLink } from 'react-router-dom';
import './Folder.css';

export default class Folder extends React.Component {
    render() {
        return (
            
            <div>
                {this.props.folders.map(folder => <NavLink to={`/folderpage/${folder.id}`}>{folder.name}</NavLink>)}
                <button>Add Folder</button>
            </div>
            
        )
    }
}